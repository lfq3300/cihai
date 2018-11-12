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
  var navALink = $('.navbar .tab a')
  console.log(queryPath);
  // 判断高度添加active

  // 判断url 给a标签添加active
  switch (queryPath) {
    case '/':
      $('#index').addClass('active')
      $(window).scroll(function () {
        var contentHeight = $('body').get(0).scrollHeight; // 内容高度
        var viewHeight = $(window).height(); // 可视高度
        var scrollTop = $(window).scrollTop(); // 
        if (window.scrollY >= $('.module2').offset().top && window.scrollY <= $('.module2').offset().top + $('.module2').height()) {
          $('.navbar .tab a').removeClass('active')
          $('#business').addClass('active')
        } else if (contentHeight - viewHeight == scrollTop) {
          $('.navbar .tab a').removeClass('active')
          $('#contact').addClass('active')
        } else {
          $('.navbar .tab a').removeClass('active')
          $('#index').addClass('active')
        }
      });
      break;
    case '/news.html':
      $('#news').addClass('active')
      $(window).scroll(function () {
        var contentHeight = $('body').get(0).scrollHeight; // 内容高度
        var viewHeight = $(window).height(); // 可视高度
        var scrollTop = $(window).scrollTop(); // 
        if (contentHeight - viewHeight == scrollTop) {
          $('.navbar .tab a').removeClass('active')
          $('#contact').addClass('active')
        } else {
          $('.navbar .tab a').removeClass('active')
          $('#news').addClass('active')
        }
      });
      break;
    case '/join.html':
      $('#join').addClass('active')
      $(window).scroll(function () {
        var contentHeight = $('body').get(0).scrollHeight; // 内容高度
        var viewHeight = $(window).height(); // 可视高度
        var scrollTop = $(window).scrollTop(); // 
        if (contentHeight - viewHeight == scrollTop) {
          $('.navbar .tab a').removeClass('active')
          $('#contact').addClass('active')
        } else {
          $('.navbar .tab a').removeClass('active')
          $('#join').addClass('active')
        }
      });
      break;
    case '/news.html':
      $('#contact').addClass('active')
      break;
  }
  $('.navbar_link').on('click', function (e) {
    var target = e.target
    if (target.id) {
      switch (target.id) {
        case 'index':
          /* $('html,body').animate({
            scrollTop: 0
          }, 600) */
          navALink.removeClass('active')
          $('#index').addClass('active')
          break;
        case 'business':
          if (queryPath == '/') {
            $('html,body').animate({
              scrollTop: $('.module2').offset().top
            }, 600)
            navALink.removeClass('active')
            $('#business').addClass('active')
          } else {
            window.location.href = './?modelu2'
          }
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
          navALink.removeClass('active')
          $('#contact').addClass('active')
          break;
      }
    }
  })
  if (location.search == '?modelu2') {
    $('html,body').animate({
      scrollTop: $('.module2').offset().top
    }, 600)
    navALink.removeClass('active')
    $('#business').addClass('active')
  }
})