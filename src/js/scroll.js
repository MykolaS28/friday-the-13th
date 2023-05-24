const goTopBtn = $(".go-top");

$(window).on("scroll", trackScroll);

goTopBtn.on("click", function () {
  $("body, html").animate({ scrollTop: 0 }, 800);
});

$("a[href^='#']").on("click", function (e) {
  e.preventDefault();
  var target = $($(this).attr("href"));
  var position = target.offset().top;
  $("body, html").animate({ scrollTop: position }, 800);
  goTop();
});

function trackScroll() {
  const scrolled = $(window).scrollTop();
  const coords = $(window).height();

  if (scrolled > coords) {
    goTopBtn.addClass("go-top--show");
  } else {
    goTopBtn.removeClass("go-top--show");
  }
}

function goTop() {
  if ($(window).scrollTop() > 0) {
    $(window).scrollTop(1);
    setTimeout(goTop, 0);
  }
}