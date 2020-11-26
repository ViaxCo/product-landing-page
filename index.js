// Using javascript we can add the stop-transition class to the body for some few milliseconds. Then in the css we can add the rule to stop play any transition momentarily. After that, when the resize is done, we can remove the stop-transition class from the body to make sure that everything acts accordingly.

// Momentarily stop transition when window is resized
(function () {
  const classes = document.body.classList;
  let timer = null;
  window.addEventListener("resize", () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      classes.add("stop-transition");
    }
    timer = setTimeout(() => {
      classes.remove("stop-transition");
      timer = null;
    }, 100);
  });
})();

$(document).ready(function () {
  // Push the section down on menu click
  $(".menu-btn").click(function (e) {
    if ($(window).scrollTop() == 0) {
      e.stopPropagation();
      $(".main-content").toggleClass("open");
    } else if (
      $(window).scrollTop() != 0 &&
      $(".main-content").hasClass("open")
    ) {
      $(".main-content").removeClass("open");
    }
  });

  $(".menu-btn").click(function (e) {
    if (
      $(window).scrollTop() == 0 &&
      $(".menu-btn").is(":checked") &&
      !$(".main-content").hasClass("open")
    ) {
      e.stopPropagation;
      !$(".main-content").toggleClass("open");
    }
  });

  // Collapse menu on link click
  $(".nav-link").click(function (e) {
    if (window.matchMedia("(max-width: 899px)").matches) {
      e.stopPropagation();
      $(".menu-btn").click();
    }
  });

  // Close the menu on window/document click
  const $document = $(document);
  $document.click(function (e) {
    if (
      !$(".menu-btn").is(e.target) && // if the target of the click isn't the button...
      $(".menu-btn").is(":checked")
    ) {
      e.preventDefault();
      $(".menu-btn").click();
    }
  });
});
