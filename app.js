$(document).ready(function () {

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




