$(document).ready(function(){
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slide1 = $('.homeSlide1')
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');

	$body = $('body');


	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    render: function(data) {
		    
		        //Debugging - Log the current scroll position.
		        // console.log(data.curTop);
		    }
		});
		
		
		// Get window size
	    winH = $window.height();
	    
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH*1);
	    $slide1.height(winH*1.5)
	    $slideTall.height(winH*2);
	    $slideTall2.height(winH*3);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}	
	
	adjustWindow()


});
