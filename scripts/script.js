$(document).ready(function () {

  $("#nav-all").on("click", function(event) {
    event.preventDefault();
    $(".flip-card").show();
  });

  $("#nav-des").on("click", function(event) {
    event.preventDefault();
    $(".hide-des").hide();
    $(".show-des").show();
  });

  $("#nav-ux").on("click", function(event) {
    event.preventDefault();
    $(".hide-ux").hide();
    $(".show-ux").show();
  });

  $("#nav-dev").on("click", function(event) {
    event.preventDefault();
    $(".hide-dev").hide();
    $(".show-dev").show();
  });

  $("a[rel*=leanModal]").leanModal();
});
