$(document).ready(() => {
  // topbar responsive
  const topbar = $(".navbar-mid");

  $("#menu").on("click", () => {
    topbar.toggleClass("active");
  });

  // offcanvas
  const menu = $("#menu");

  $(document).on("click", function (e) {
    if (
      !menu.is(e.target) &&
      !menu.has(e.target).length &&
      !topbar.is(e.target) &&
      !topbar.has(e.target).length
    ) {
      topbar.removeClass("active");
    }
  });
});
