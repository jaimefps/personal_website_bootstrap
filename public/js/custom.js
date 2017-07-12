/*=============================================================================
                                    SERVICES
=============================================================================*/
// jQuery for "wow" animations for activating on scrolling to that part of the page
$(function () {

  //initiate the WOW plug-in with jQuery
  // animation fire on scroll 
  // when the element has the "wow" class
  // together with an animte.css animation
  new WOW().init();

});

/*=============================================================================
                                    OUR WORK
=============================================================================*/

// $(function () {

//   $("#work").magnificPopup({
//     delegate: 'a', // child items selector, by clicking on it popup will open
//     type: 'image',
//     gallery: {
//       enabled: true
//     }
//   });

// });


/*=============================================================================
                                    TEAM CAROUSEL
=============================================================================*/

// create carousel-effect with the OwlCarousel jQuery library
$(function () {

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 600,
    loop: true,
    autoplayHoverPause: true,
    // responsive resizing of carousel, 
    // see owl-carousel docs for details.
    responsive: {
      // breakpoint from 0 and up
      0: {
        // number of items shown at a time
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });

});


/*=============================================================================
                                    TESTIMONIALS CAROUSEL
=============================================================================*/

// create carousel-effect with the OwlCarousel jQuery library
$(function () {

  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 600,
    loop: true,
    //    autoplayHoverPause: true,
  });

});


/*=============================================================================
                                    TESTIMONIALS COUNTER
=============================================================================*/

$(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 3000,
  });
});


/*=============================================================================
                                    CLIENTS CAROUSEL
=============================================================================*/

// create carousel-effect with the OwlCarousel jQuery library
$(function () {

  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 600,
    loop: true,
    autoplayHoverPause: true,
    
    // responsive resizing of carousel, 
    // see owl-carousel docs for details.
    responsive: {
      // breakpoint from 0 and up
      0: {
        // number of items shown at a time
        items: 1
      },
      480: {
        items: 3
      },
      768: {
        items: 5
      },
      992: {
        items: 6
      }
    }
  });

});

/*=============================================================================
                                    NAVBAR
=============================================================================*/
// show / hide navbar black background
// show / hide back-to-top button
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      
      $("nav").removeClass("vesco-top-nav");
      $("#back-to-top").fadeOut();
      
    } else {
      
      $("nav").addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();
      
    }
  });
});

// smooth-scroll effect to move to page section when clicking navbar
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    // get/return id of the clicked link
    let section = $(this).attr("href");
    // pass the "section" variable to the function
    $('html, body').animate({
      scrollTop: $(section).offset().top - 20
      // second parameter is the animation speed.
      // third parameter is the easing-effect 
    }, 1250, "easeInOutExpo");
  });
});

// close mobile navbar menu on click

$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });
});



















