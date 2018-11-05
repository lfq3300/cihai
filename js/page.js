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
    console.log(i)
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