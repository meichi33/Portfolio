$(function () {
  //ページ内スクロール
  var $nav = $(".header");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
  //スクロールするとふわっと表示（応用）
  ScrollReveal().reveal(".fadein", {
    duration: 800, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // どれくらい見えたら実行するか（0〜1の間で指定）
  });
});
