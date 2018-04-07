
//delay on click
function delay(URL) {
	setTimeout( function() {
		window.location = URL
	}, 1000);
}




$(document).ready(function () {


	$('.album').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 60000
	});


//scroll fixed navbar toggle
	let fn = $('.fixedNav');

	$(window).scroll(function() {
		if( $(this).scrollTop() > 625){
			fn.removeClass('hidden');
		} else {
			fn.addClass('hidden');
		}
	});

//about me link jquery stuffs
	$('.left-link').mouseover(function() {
		$('.face-img').attr('src', './images/face-left.png');
	});

	$('.left-link').click(function(){
		$('.left-link-img').attr('src', './images/about-me-bam.png');
		$('.face-img').attr('src', './images/face-left-shot.png');
		$('.left-link-img').fadeOut(800, function(){
			$(this).attr('src', './images/about-me.png').fadeIn(800);
		});
	});

//contact link jquery stuffs
	$('.right-link').mouseover(function() {
		$('.face-img').attr('src', './images/face-right.png');
	});
	$('.right-link').click(function(){
		$('.right-link-img').attr('src', './images/contact-pewpew.png');
		$('.face-img').attr('src', './images/face-right-shot.png');
		$('.right-link-img').fadeOut(800, function(){
			$(this).attr('src', './images/contact.png').fadeIn(800);
		});
	});


//projects link jquery stuffs
	$('.middle-link').mouseover(function(){
		$('.face-img').attr('src', './images/face-mid.png');
	})
	$('.middle-link').click(function(){
		$('.middle-link-img').attr('src', './images/projects-pow.png');
		$('.face-img').attr('src', './images/face-mid-shot.png');
		$('.middle-link-img').fadeOut(800, function(){
			$(this).attr('src', './images/projects.png').fadeIn(800);
		});
	});
});




