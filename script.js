$(document).ready( function() {

  $('.promo_1').click( function() {
    $('.lightbox, .lightbox-container').css('display' , 'block');
    $('.lightbox-container').css('background-image' , 'url(img/gallery/pic17.png)');
    $('.lightbox-container').css('background-repeat' , 'no-repeat');
    $('.lightbox-container').css('background-size' , 'cover');
  });

   $('.gallery img').hide().show(700); 
  
});

