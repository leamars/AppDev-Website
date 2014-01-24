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
	
	$(".maijidBox").mouseenter(function() {
		$("#maijid1").addClass("animated tada");
	});
	
	$(".maijidBox").mouseleave(function() {
		$("#maijid1").removeClass("animated tada");
	});
	
	$("#colin1").mouseover(function() {
		$("#colin1").addClass("animated tada");
	});
	
	$("#colin1").mouseleave(function() {
		$("#colin1").removeClass("animated tada");
	});
	
	$("#patrick1").mouseover(function() {
		$("#patrick1").addClass("animated tada");
	});
	
	$("#patrick1").mouseleave(function() {
		$("#patrick1").removeClass("animated tada");
	});
	
	$("#lea1").mouseover(function() {
		$("#lea1").addClass("animated tada");
	});
	
	$("#lea1").mouseleave(function() {
		$("#lea1").removeClass("animated tada");
	});
	
	$("#tiffany1").mouseover(function() {
		$("#tiffany1").addClass("animated tada");
	});
	
	$("#tiffany1").mouseleave(function() {
		$("#tiffany1").removeClass("animated tada");
	});
	
	$("#danielG1").mouseover(function() {
		$("#danielG1").addClass("animated tada");
	});
	
	$("#danielG1").mouseleave(function() {
		$("#danielG1").removeClass("animated tada");
	});
	
	$("#danielT1").mouseover(function() {
		$("#danielT1").addClass("animated tada");
	});
	
	$("#danielT1").mouseleave(function() {
		$("#danielT1").removeClass("animated tada");
	});
	
	$("#spencer1").mouseover(function() {
		$("#spencer1").addClass("animated tada");
	});
	
	$("#spencer1").mouseleave(function() {
		$("#spencer1").removeClass("animated tada");
	});
	
	$('#events').waypoint(function() {
		document.getElementById("events1").style.display = "inline";
		$("#events1").addClass("animated fadeInRightBig");
		document.getElementById("events2").style.display = "inline";
		$("#events2").addClass("animated fadeInDownBig");
	}, { offset: '45%' });

});