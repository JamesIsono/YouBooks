/* 動画再生速度コントロール */
document.querySelector('.video-bottom').playbackRate = .7;
document.querySelector('#video-top').playbackRate = .5;
// document.querySelector('.video-detail').playbackRate = .8;



/* ナビゲーションバー スクロール表示 */
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1210) {
      $('#menu').addClass('fixed');
    } else {
      $('#menu').removeClass('fixed');
    }
  });
});




/* "フワッと"現れるアニメーション制御 */
$(document).ready(function(){
  $('.fuwat').css('visibility','hidden'); /* "fuwat"というのは、cssにこれらを付加します */
  $(window).scroll(function(){ /* ページをスクロールすると作動する仕組みです */
   var windowHeight = $(window).height(), /* "windowHeight"というのは、高さのことです */
       topWindow = $(window).scrollTop(); /* "topWindow"というのは、ページの一番上のことです */
   $('.fuwat').each(function(){ /* "fuwat"というのは、以下の条件で作動します */
    var objectPosition = $(this).offset().top; /* "objectPosition"というのは、ページトップから見た、対象物の位置です */
    if(topWindow > objectPosition - windowHeight + 200){ /* もし、対象物の位置から、今の位置をマイナスし、それに200px足した数字が。ページ一番上の値よりも小さいのであれば、 */
     $(this).addClass("fuwatAnime"); /* アニメーションを作動させます */
    } else {
      $(this).removeClass("fuwatAnime"); /* アニメーションを停止します */
    }
   });
  });
});