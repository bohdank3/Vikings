$(function(){

 $('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
	asNavFor: '.heroes__slider-text',
	prevArrow:'<button type="button" class="slick-prev slick-btn"><img src="./images/arrow-left.png" alt=""></button>',
	nextArrow: '<button type="button" class="slick-next slick-btn"><img src="./images/arrow-right.png" alt=""></button>'
});
$('.heroes__slider-text').slick({
  slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	asNavFor: '.heroes__slider-img',
	arrows: false
});
});