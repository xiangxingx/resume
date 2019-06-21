// leanCloud
!function () {
  var view = document.querySelector('section.message')
  var model = {
    init: function () {
      var APP_ID = 'O3SKGkzld4qyFCd7qOpsTp7A-9Nh9j0Va'
      var APP_KEY = 'W4uq0d3kcB7uHpwLdL7duIVK'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    // 获取数据
    fetch: function () {
      var query = new AV.Query('message')
      return query.find() // promise对象
    },
    // 创建数据
    save: function (name, content) {
      var Message = AV.Object.extend('message')
      var message = new Message()
      return message.save({ // promise对象
        name: name,
        content: content
      })
    }
  }

  var controller = {
    view: null,
    messageList: null,
    model: null,
    init: function (view) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = document.querySelector('#postMessageForm')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },

    loadMessages: function () {
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item) => item.attributes)
          array.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = `${item.name}: ${item.content}`
            this.messageList.appendChild(li)
          })
        }
      )
    },
    bindEvents: function () { // 只管绑定事件
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = this.form
      let content = myForm.querySelector('input[name = content]').value
      let name = myForm.querySelector('input[name = name]').value
      this.model.save(name, content).then(
        function (object) {
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}: ${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
          myForm.querySelector('input[name = content]').value = ''
        }
      )
    }
  }

  controller.init(view, model)
}.call()
