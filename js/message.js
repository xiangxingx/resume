var APP_ID = 'U8OXtVsSq93S09f9BtvAsx74-gzGzoHsz';
var APP_KEY = '8TIYFxc5x9bu88nB7Bp4vGT7';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let content = myForm.querySelector('input[name = content]').value
  console.log(content)
  var Message = AV.Object.extend('message');
  var message = new Message();
  message.save({
    content: content
  }).then(function (object) {
    alert('上传成功');
  })
})

