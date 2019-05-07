document.addEventListener('DOMContentLoaded', () => {
  var $ = require('jquery');

  $(document).ready(() => {
    const plates = [
      'images/picnic-plate1-shadow.png', 
      'images/picnic-plate2-shadow.png', 
      'images/picnic-plate3-shadow.png'
    ];
    
    setInterval(function() {
      if ($('.hero-img').attr('src') == plates[0]) {
        $('.hero-img').attr("src", plates[1]);
      } else if ($('.hero-img').attr('src') == plates[1]) {
        $('.hero-img').attr("src", plates[2]);
      } else {
        $('.hero-img').attr("src", plates[0]);
      }
    }, 8000);
  });
});
