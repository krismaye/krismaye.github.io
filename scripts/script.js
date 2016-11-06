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

  $( "#sage_grace-card" ).click(function() {
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#design_jam_1-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#sage_grace-slide" ).slideToggle( "slow" );
  });

  $( "#si_582-card" ).click(function() {
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#design_jam_1-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideToggle( "slow" );
  });

  $( "#si_520-card" ).click(function() {
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#design_jam_1-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideToggle( "slow" );
  });

  $( "#design_jam_1-card" ).click(function() {
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideUp( "slow" );
    $( "#design_jam_1-slide" ).slideToggle( "slow" );
  });

  $( "#rtf-card" ).click(function() {
    $( "#sage_grace-slide" ).slideUp( "slow" );
    $( "#si_582-slide" ).slideUp( "slow" );
    $( "#si_520-slide" ).slideUp( "slow" );
    $( "#design_jam_1-slide" ).slideUp( "slow" );
    $( "#rtf-slide" ).slideToggle( "slow" );
  });
});
