$(document).ready(function () {
  init();
  $(".tabs_nav").click(function () {
    let bar = $(this).parent().find(".tabs_bar");
    bar.width($(this).width());
    $(bar)
      .stop()
      .animate(
        {
          left: $(this).position()["left"]
        },
        {
          duration: 300
        }
      );
    slideContent($(this));
  });
});

function init() {
  const $first = $(".tabs_navs .tabs_nav").eq(0);
  $first.parent().find(".tabs_bar").width($first.width());
}
function slideContent(obj) {
  let margin = $(obj).parent().parent().find(".tab_body").width();
  margin = margin * $(obj).prevAll().length;
  margin = margin * -1;
  $(obj)
    .parent()
    .parent()
    .find(".tab_slider")
    .stop()
    .animate(
      {
        marginLeft: margin + "px"
      },
      {
        duration: 300
      }
    );
}
