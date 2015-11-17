$(document).ready(function(){
  /* SINGLE ITEM SLIDER */
  $('.1by1-slider').slick({
    speed: 300
  });

  /* THREE ITEM SLIDER */
  $('.3by3-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: 
    [
      {
        breakpoint: 1200,
        settings: 
        {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: 
        {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },  
    ]
  });

  /* SINGLE ITEM SLIDER WITH FADE EFFECT */
  $('.single-fade-slider').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });
});



