/* Initialising Navigation Bar */
$('#mobile-navigation').shrinking_navigation(
{
  breakpoint: '767',
  transitionSpeed: 'fast'
});



/* Initialising Banner Slider */
var mouseEnteredSlider = false;
$('#banner').slider({
  speed: config.bannerAnimationSpeed,
  easing: 'ease'
}).mouseenter(function(){
  mouseEnteredSlider = true;
}).mouseleave(function(){
  mouseEnteredSlider = false;
});

setInterval(function(){
  if(!mouseEnteredSlider){
    if($('.slider-next').css('display') != 'none'){
      $('.slider-next').click();
    }else{
      $('.slider-dots span:first-child').click();
    }
  }
}, config.bannerChangeInterval);

