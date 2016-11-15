$(document).ready(function () {
	$('#myForm').submit(function (){

		event.preventDefault();
		console.log(event);
		var name = $('#name-input').val();
		$('#target').html(name);
	})
	$('#name-input').keydown(function (event) {
		event.preventDefault()
		console.log(event)
	})
	$('#social a').click(function(e){
		console.log(e)
		e.preventDefault()
	})
	$('')
})

// keyup is when a key is released
// keydown is when a key is pressed down
// keypress is when a key with a character is pressed (not shift, ctrl etc.)