$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		var width = $(window).width()
		if (width>= '880px') {
			$('#small-nav').hide()
		}
		console.log($(window).width())
	})

	$('#burger').click(function () {
		$('#small-nav').slideToggle(100);
	})
})
