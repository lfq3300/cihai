$(function () {
  var timer = null;
  var i = 0;
  clearInterval(timer);
  timer = setInterval(time, 3000);
  //圆点控制
  $('.circle span').on('click', function () {
    i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    // $('.carousel_box li').eq($(this).index()).fadeIn().siblings().fadeOut();
    $('.carousel_box li').eq($(this).index()).addClass('active').siblings().removeClass('active');
  });

  function play() {
    if (i < 0) {
      i = $('.circle span').length - 1;
    }
    if (i > $('.circle span').length - 1) {
      i = 0;
    }
    $('.circle span').eq(i).addClass("active").siblings().removeClass("active");
    // $('.carousel_box li').eq(i).fadeIn().siblings().fadeOut();
    $('.carousel_box li').eq(i).addClass('active').siblings().removeClass('active');
  }

  function time() {
    i++;
    play();
  }
  $('.carousel').mouseover(
    function () {
      clearInterval(timer)
    }
  ).mouseout(
    function () {
      timer = setInterval(time, 3000);
    }
  );


})

$(function () {
  function menuScroll(box) {
    var oBox = $(box);
    if (!oBox.length) return;

    function scrllFun() {
      var wtop = $(window).scrollTop();
      if (wtop > 80) {
        oBox.addClass('scoll_top');
      } else {
        oBox.removeClass('scoll_top');
      }
    }
    $(window).scroll(function () {
      scrllFun();
    });
  }
  menuScroll('.navbar')
})
$(function () {
  var queryPath = location.pathname;
  // console.log(queryPath);
  
  $('.navbar_link').on('click', function (e) {
    var target = e.target
    if (target.id) {
      switch (target.id) {
        case 'index':
          /* $('html,body').animate({
            scrollTop: 0
          }, 600) */
          break;
        case 'business':
          $('html,body').animate({
            scrollTop: $('.module2').offset().top
          }, 600)
          break;
        case 'news':
          /* $('html,body').animate({
            scrollTop: $('.module3').offset().top + 60
          }, 600) */
          break;
        case 'join':
          // alert('选择');
          break;
        case 'contact':
          $('html,body').animate({
            scrollTop: $('.bottom_box').offset().top
          }, 600)
          break;
      }
    }
  })
})