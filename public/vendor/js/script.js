$(document).ready(function() {
	// $('#part-1').on('click', function(event) {
	// 	event.preventDefault();
		
	// 	$('html, body').animate({scrollTop: 1500},400);
	// });

	$('.menu a').click(function(event) {
		event.preventDefault();

		part = $(this).attr('href'); // lấy id của thẻ h2 tương ứng
		// console.log(part);

		position = $(part).offset().top; // tìm vị trí thẻ h2

		// $('#part-1').offset().top;
		// hiệu ứng
		$('html, body').animate({scrollTop: position},1400,'easeInOutSine');
	});
});