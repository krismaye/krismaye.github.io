$(document).ready(function () {

  $(".lsa-honors-additional, .graphic-design-additional, .sage-grace-additional, .roommatch-additional, .rtf-additional").click( function () {
    dropdownLink = $(this);
    dropdown = $(this).parent().next(".project-detail");

    if (dropdown.is(":visible")) {
      $(dropdown).hide();
      $(dropdownLink).html("Show details &raquo;");
    } else {
      $(dropdown).show();
      $(dropdownLink).html("Hide details &raquo;");
    }
  });
});
