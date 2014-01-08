var onceThru = false;
var pathname = window.location.pathname;
$(document).ready(function() {
	$(window).scroll($.debounce(500, true, function() {
		$(".navbar-inverse").fadeTo("slow", 0.8);
	}));
	$(window).scroll($.debounce(500, function() {
		$(".navbar-inverse").fadeTo("slow", 1);
	}));
	// scroll to certain link - CSS Tricks
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	if (pathname == "/appDev/members.php") {
		$("a[href='members.php']").click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, "slow");
			return false;
		});
	}
	
	if (pathname == "/appDev/portfolio.php") {
		$("a[href='portfolio.php']").click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, "slow");
			return false;
		});
	}
	
	$("#maijid1").mouseover(function() {
		$("#maijid1").addClass("animated wobble");
	});
	
	$("#colin1").mouseover(function() {
		$("#colin1").addClass("animated bounce");
	});
	
	$("#patrick1").mouseover(function() {
		$("#patrick1").addClass("animated flash");
	});
	
	$("#lea1").mouseover(function() {
		$("#lea1").addClass("animated pulse");
	});
	
	$("#tiffany1").mouseover(function() {
		$("#tiffany1").addClass("animated swing");
	});
	
	$("#danielG1").mouseover(function() {
		$("#danielG1").addClass("animated tada");
	});
	
	$("#danielT1").mouseover(function() {
		$("#danielT1").addClass("animated shake");
	});
	
	$("#spencer1").mouseover(function() {
		$("#spencer1").addClass("animated bounce");
	});

});