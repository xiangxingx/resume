window.Controller = function (options) {
  var init = options.init

  let object = {
    view: null,
    model: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.model.init()
      init.call(this, view, model)
      this.bindEvents.call(this)
    }
  }
  for (let key in options) {
    if (key !== 'init') {
      object[key] = options[key]
    }
  }
  return object
}


/* var controller = { //声明一个对象controller;controller的所有属性，就是对view的所有操作；
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
} */