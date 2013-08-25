$(document).ready(function() {
		$('.modal-launch').click(function () {
		console.log('what?')
		$('.modal').addClass('modal-active');
	})

	$('.modal-close').click(function () {
		console.log('we closed it!')
		$('.modal').removeClass('modal-active');

	})	
})
