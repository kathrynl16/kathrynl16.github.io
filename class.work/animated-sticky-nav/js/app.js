$(document).ready(function () {
	$(window).scroll(function (){ 
		var offset = $(window).scrollTop();



	
	
		if(offset>300) {
			$('header').addClass('header-offset')
		} else {
			$('header').removeClass('header-offset')
		}

})


})
