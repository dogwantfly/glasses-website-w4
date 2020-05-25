$(document).ready(function() {

	$('.mobile-menu').click(function(e) {
        e.preventDefault();
        $('.menu').toggleClass('active')
      })
  


  //blog下拉選單
  $('.mobile-menu-blog').on('click', function () {
    $('.mobile-menu-blog').toggleClass('active');
    $('.blog-nav').toggleClass('active');
    $('.js-blog-menu-list').toggleClass('active');
  });

  AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
  });
})