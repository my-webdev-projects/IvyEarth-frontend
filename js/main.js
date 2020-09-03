// Sticky Navigation

let navbar = $('.navbar');

$(window).scroll(function () {
  let oTop = $('.main-info').offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass('sticky');
  } else {
    navbar.removeClass('sticky');
  }
});
