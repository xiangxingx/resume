window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    init: function () {
      var APP_ID = 'O3SKGkzld4qyFCd7qOpsTp7A-9Nh9j0Va'
      var APP_KEY = 'W4uq0d3kcB7uHpwLdL7duIVK'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    fetch: function () {
      var query = new AV.Query(resourceName)
      return query.find() // promise对象
    },
    save: function (object) {
      var X = AV.Object.extend(resourceName)
      var x = new X()
      return x.save(object)
    }
  }
}