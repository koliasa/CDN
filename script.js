// This script is used to make the navigation menu float to the right side of the screen when the window is resized.

$(window).resize(function() {
    var width = $(window).width();
    if (width > 768) {
      $("nav").removeClass("float-right");
    } else {
      $("nav").addClass("float-right");
    }
  });
  