$(document).ready(function(){


    // Scroll Events
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			
			// $('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			// $('#slide_out_menu').removeClass('scrolled');
		};

		
		//Scroll Effects

	});

	$(window).scroll(function(){
		
		var wScroll = $(this).scrollTop();

		// Fixed navigation on large screens 
		if(wScroll > 135) {
			$('#navigation__nav').addClass('sticky_top');
			$('.logo_fixed_nav').css('display','block');
		} else {
			$('#navigation__nav').removeClass('sticky_top');
			$('.logo_fixed_nav').css('display','none');
		}
	});

    $('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide_out_menu').removeClass('open');
			})
		}
	});


	// Back to top smmoot animation
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
	});
	

	// Wow Animations
    wow = new WOW(
		{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	  }
	  )
	  wow.init();

});