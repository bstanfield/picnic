document.addEventListener('DOMContentLoaded', () => {
  var $ = require('jquery');
  console.log('Hello?');

  $(document).ready(() => {
    console.log('Document ready');
    setInterval(function() {
      $('.hero-img').attr("src", 'images/picnic-plate2-shadow.png');
    }, 3000);
  })
});
