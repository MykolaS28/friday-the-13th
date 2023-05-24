$(document).ready(function () {
  const goTopBtn = $(".go-top");

  $(window).on("scroll", function () {
    trackScroll();
  });

  goTopBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    var position = target.offset().top;

    $("html, body").animate({ scrollTop: position }, {
      duration: 800,
      start: function () {
        goTopBtn.removeClass("go-top--show");
      },
      complete: function () {
        window.location.hash = target.selector;
        goTopBtn.addClass("go-top--show");
      }
    });
  });

  function trackScroll() {
    const scrolled = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scrolled > windowHeight / 2) {
      goTopBtn.addClass("go-top--show");
    } else {
      goTopBtn.removeClass("go-top--show");
    }
  }
});
