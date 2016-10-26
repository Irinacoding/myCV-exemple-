
$(window).load(function() {

    "use strict";

    


});

$(document).ready(function() {
    // PreLoader
    $("body").queryLoader2({
        // Preloader options
        backgroundColor: "#34495e",
        barHeight: 2,
        minimumTime: 1000,
        fadeOutTime: 2000,
        percentage: true,
    });

    // Sticky Menu
    $(".header-area").sticky({
        topSpacing: 0
    });



    // jQuery Smooth Scroll
    $('.page-scroll').on('click', function(event) {
        var $anchor = $(this),
            headerH = '55';
        $('html , body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Responsive Menu
    $("ul.nav.navbar-nav li a").click(function() {
        $(".navbar-collapse").removeClass("in");
    });

    // jQuery ScrollSpy
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 70
    });

   





    // Details Post Carousel 
    $("#details-post-carousel").owlCarousel({
        //  Post Carousel Settings
        navigation: false,
        slideSpeed: 2000,
        paginationSpeed: 1000,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        stopOnHover: true,
    });

 

 

    // Counter JS
    $('.count-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });
	// all Parallax Section

	
	function parallaxInit() {		
		$("#us").parallax("50%", 0.3);
		$("#about").parallax("50%", 0.3);

	}
	parallaxInit();	
	
	
	
	
		// Skill bar Function
		
	$(document).ready(function(){
	  "use strict";
	  $('.skillbar').appear(function() {
		$(this).find('.skillbar-bar').animate({
		  width:$(this).attr('data-percent')
		},3000);
	  });
	});

 
        


});