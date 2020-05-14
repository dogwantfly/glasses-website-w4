$(document).ready(function() {

	$('.m-menu').click(function(e) {
        e.preventDefault();
        $('.menu').toggleClass('active')
      })
  
  //   // 隱藏所有的 li 內文
  // $('.faq-card__item__body').hide();
  // // // 預設讓第一個 li 加上 active
  // // $('.faq-card__item .label').eq(0).addClass('active');
  // // 預設讓第一個 li 內文 顯示
  // $('.faq-card__item__body').eq(0).show();

  // // 點擊 li
  // $('.faq-card__item .label').click(function (e) {
  //   // 取消預設 event 事件
  //   e.preventDefault(); 
  //   // 加上 active 屬性，並把其他有 active 的移除
  //   // $(this).toggleClass('active').siblings().removeClass('active');
  //   $(this).children:checked;
  //   // 讓自己的 li body 切換收合
  //   $(this).parent().next().slideToggle();
  //   // 讓其他 li body 收合
  //   $(this).siblings().parent().next().slideUp();
  // })

 

  //blog 手機版下拉選單
  $('.m-menu-blog').click(function(e) {
    e.preventDefault();
    $('.blog-menu-list').removeClass('close');
    $('.blog-menu-list').toggleClass('active');
 
    $('.m-menu-blog').hide();
    $('.m-menu-blog-up').show();
  })
  //blog 手機版收回選單
  $('.m-menu-blog-up').click(function(e) {
    e.preventDefault();
    
    $('.blog-menu-list').addClass('close').removeClass('active');
    $('.m-menu-blog-up').hide();
    $('.m-menu-blog').show();
  })
})