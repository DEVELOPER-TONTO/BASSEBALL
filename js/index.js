function moveHome() {
  location.href = "index.html";
}

/*탭메뉴*/
$(function () {
  $(".tabcontent > div").hide();
  $(".tabnav a")
    .click(function () {
      $(".tabcontent > div").hide().filter(this.hash).fadeIn();
      $(".tabnav a").removeClass("active");
      $(this).addClass("active");
      return false;
    })
    .filter(":eq(0)")
    .click();
});
