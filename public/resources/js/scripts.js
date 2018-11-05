$(document).ready(function(){


  // Add smooth scrolling to all links

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  /* Waypoints Sticky navi */

  $(".js--section-development").waypoint(function(direction)
  {
    if(direction == "down")
    {
      $("nav").addClass("sticky");
    } else
    {
      $("nav").removeClass('sticky');
    }
  }, {
  offset: "60px;"
  });


  /*
  var waypoint = new Waypoint({
  element: document.getElementById('element-waypoint'),
  handler: function(direction) {
    notify(this.element.id + ' triggers at ' + this.triggerPoint)
  },
  offset: '75%'
  })
  */

  /* Mobile Navigation */
  $(".js--nav-icon").click(function()
  {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200)
    if(icon.hasClass("ion-navicon-round"))
    {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else
    {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });



});
