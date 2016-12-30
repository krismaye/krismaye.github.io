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

  // $("a[rel*=leanModal]").leanModal();

  $('.portfolio-slider').unslider({
    infinite: true
  });

  $( "#si_622-card" ).click(function() {
    $( "#si_539-slide" ).slideUp( "slow" );
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#si_622-slide" ).slideToggle( "slow" );
  });

  $( "#si_539-card" ).click(function() {
    $( "#si_622-slide" ).slideUp( "slow" );
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#si_539-slide" ).slideToggle( "slow" );
  });

  $( "#sage_grace-card" ).click(function() {
    $( "#si_622-slide" ).slideUp( "slow" );
    $( "#si_539-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#sage_grace-slide" ).slideToggle( "slow" );
  });

  $( "#si_582-card" ).click(function() {
    $( "#si_622-slide" ).slideUp( "slow" );
    $( "#si_539-slide" ).slideUp( "slow" );
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideToggle( "slow" );
  });

  $( "#si_520-card" ).click(function() {
    $( "#si_622-slide" ).slideUp( "slow" );
    $( "#si_539-slide" ).slideUp( "slow" );
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideToggle( "slow" );
  });

  $( "#rtf-card" ).click(function() {
    $( "#si_622-slide" ).slideUp( "slow" );
    $( "#si_539-slide" ).slideUp( "slow" );
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideToggle( "slow" );
  });
});
