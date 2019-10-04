$(document).ready(function() {
  $(".product-detail-content__information__menu ul li a").click(function(
    event
  ) {
    event.preventDefault();
    $(this)
      .parent()
      .addClass("active");
    $(this)
      .parent()
      .siblings()
      .removeClass("active");
    $($(this).data("target")).addClass("show");
    $($(this).data("target"))
      .siblings()
      .removeClass("show");
  });

  // $('#namaLengkap').focus(function () {
  //   console.log($(this).prev());
  //   $(this).prev().css({ "color": "#0673ce" });
  // })

  $(".burger").click(function() {
    console.log("click");
    $(".mobile").toggleClass("show");
    $(".mobile__nav").toggleClass("show");
    $(this).toggleClass("show");
  });
});
