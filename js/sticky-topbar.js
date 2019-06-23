!function () {
  var view = View('#topNavBar') // 声明一个变量view
  var controller = { //声明一个对象controller;controller的所有属性，就是对view的所有操作；
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      var view = this.view
      window.addEventListener('scroll', (x) => {
        if (window.scrollY > 0) {
          this.active()
        } else {
          this.deactive()
        }
      }) // 箭头函数没有this，箭头函数内外，this不变；
    },
    active: function () {
      this.view.classList.add('sticky')
    },
    deactive: function () {
      this.view.classList.remove('sticky')
    }
  }
  controller.init(view) // 调用init方法
}.call()
