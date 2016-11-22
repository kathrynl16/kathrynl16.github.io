$(document).ready(function(){


	// show each div when scrolls over and hides after
	// $(window).scroll(function(){
	// 	var scrollTop = #(window).scrollTop();
	// 	$('.bat').css();
		// })

	// var topOfBat = $('.bat').offset().top;
	// var topOfDog = $('.dog').offset().top;
	// $(window).scroll(function (){
	// 	if ($(window).scrollTop() > topOfBat && $(window).scrollTop() < topOfDog) {
	// 		$('.bat').fadeIn("slow");
	// 	} else {
	// 		$('.bat').fadeOut("slow");
	// 	}
	// })
	var batScrollPos = $('.bat').offset().top;
	var dogScrollPos = $('.dog').offset().top;
	
	console.log(batScrollPos, dogScrollPos)


	// $(window).scroll(function (){
	// 	if ($(this).scrollTop() > 1200 && $(this).scrollTop() < 1900){
	// 	    $(".bat").css('visibility', 'visible');
	// 	    $(".dog").css('visibility', 'hidden');
	// 	    $(".human").css('visibility', 'hidden');
	// 	}
 // 		else if ($(this).scrollTop() > 1900 && $(this).scrollTop() < 3000){
	//         $(".bat").css('visibility', 'hidden');
	//         $(".dog").css('visibility', 'visible');
	//         $(".human").css('visibility', 'hidden');
	// 	} 
	// 	else {
	// 		 $(".bat").css('visibility', 'hidden');
	// 		 $(".dog").css('visibility', 'hidden');
	// 		 $(".human").css('visibility', 'hidden');
	// 	 }
	// })
    function fade() {
        $('.bat').each(function() {
            /* Check the location of each desired element */
            var objectBottom = $('.bat').offset().top + $('.bat').outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            console.log(objectBottom, windowBottom)

            /* If the object is completely visible in the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($('.bat').css('opacity')==0) {$('.bat').fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
                if ($('.bat').css('opacity')==1) {$('.bat').fadeTo(500,0);}
            }
        });
    }
    fade(); //Fade in completely visible elements during page-load
    $(window).scroll(function() {
    	fade();
	}); //Fade in elements during scroll

	// $('.bat').show();
	// $('.dog').show();
	// $('.human').show();
	// $('.butterfly').show();
	// $('.mantis-shrimp').show();







});