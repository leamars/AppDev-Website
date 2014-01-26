var onceThru = false;
var pathname = window.location.pathname;
var devs = false;
var desi = false;
var uxd = false;
var comm = false;
$(document).ready(function() {
	
	var questions = ["How many windows are there in north campus?", "Why do the fire alarms in Haines trigger the fire alarms in the whole south campus?", "Do you know Betty, the dining hall lady?", "If you had 13 colorful marbles, which one would you give to Raynard Kington?", "Some other random shit..."];
	
	var num = Math.floor(Math.random() * questions.length);
	
	var selectedQuestion = questions[num];
	
	$("label[for='q3']").text(selectedQuestion);
	
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
		$("#maijid1").addClass("animated pulse");
	});

	
	$("#colin1").mouseover(function() {
		$("#colin1").addClass("animated pulse");
	});
	
	
	$("#patrick1").mouseover(function() {
		$("#patrick1").addClass("animated pulse");
	});
	
	$("#lea1").mouseover(function() {
		$("#lea1").addClass("animated pulse");
	});
	
	$("#tiffany1").mouseover(function() {
		$("#tiffany1").addClass("animated pulse");
	});
	
	
	$("#danielG1").mouseover(function() {
		$("#danielG1").addClass("animated pulse");
	});
	
	
	$("#danielT1").mouseover(function() {
		$("#danielT1").addClass("animated pulse");
	});
	
	
	$("#spencer1").mouseover(function() {
		$("#spencer1").addClass("animated pulse");
	});
	
	
	$("#devs").click( function() {

		if (desi == true || devs == true || uxd == true || comm == true) {
			$(".jobRole").empty();
		}
	
		if (($(".jobRole").is(':empty')) || (devs == false)) { 
			$(".jobRole").append("<h3 class='redTitle'> DEVELOPER </h2> As a trainee, you would be assigned a mentor (current Senior/Junior Developer) and will partake in a semester long course on either iOS Development or Android Development. The end of the course will involve a final project of your choice. Once you have completed this program successfully, you may get a spot as a Junior Developer.  </p>");
		}
		else {
		$(".jobRole").empty();
		}
		devs = true;
		desi = false;
		uxd = false;
		comm = false;
	});
	
		$("#desi").click( function() {
		if (desi == true || devs == true || uxd == true || comm == true) {
			$(".jobRole").empty();
		}
	
		if (($(".jobRole").is(':empty')) || (desi == false)) { 
			$(".jobRole").append("<h3 class='redTitle'> UX/GRAPHIC DESIGNER </h3> <p> As a designer on Grinnell Appdev, you are creating the very best product for all our users in the world. You will be involved in all aspects of the product development process and collaborate closely with the product and engineering team throughout the entire project lifecycle. You would design application flows and experiences that are  astonishingly simple and elegant. </p> <p>You will learn and develop skills relating to product design, interaction design, and visual design, and will own the experience for the products you work on. You should have a sense of product design, and be a self-starter with a love for learning. </p>");
		}
		else {
		$(".jobRole").empty();
		}
		devs = false;
		desi = true;
		uxd = false;
		comm = false;
	});
	
		$("#uxd").click( function() {
		if (desi == true || devs == true || uxd == true || comm == true) {
			$(".jobRole").empty();
		}
		if (($(".jobRole").is(':empty')) || (uxd == false)) { 
			$(".jobRole").append("<h3 class='redTitle'> FINANCIAL OFFICER </h3><p> Take Care of everything financial related to Grinnell Appdev. Assist with preparing budgets and cash flows. Implement financial policies and procedures. This is a first time hire for this position, As such, we're looking for someone with more experience to own this department.  </p>");
		}
		else {
		$(".jobRole").empty();
		}
		devs = false;
		desi = false;
		uxd = true;
		comm = false;
	});
	
		$("#comm").click( function() {
		if (desi == true || devs == true || comm == true || uxd == true) {
			$(".jobRole").empty();
		}
		if (($(".jobRole").is(':empty')) || (comm == false)) { 
			$(".jobRole").append("<h3 class='redTitle'> COMMUNITY BUILDER </h3><p> As a Community Developer, you would help us develop and expand our community and/or blogging outreach efforts.<br>Become an advocate for Grinnell Appdev in Social Media spaces, engaging in dialogues and answering questions where appropriate. Implement a proactive strategy for capturing customer online reviews. Monitor online perceptions of the group and respond accordingly. Study the impact that our applications may have on society at large.</p>");
		}
		else {
		$(".jobRole").empty();
		}
		devs = false;
		desi = false;
		uxd = false;
		comm = true;
	});
	
	
	$('#events').waypoint(function() {
		document.getElementById("events1").style.display = "inline";
		$("#events1").addClass("animated fadeInRightBig");
		document.getElementById("events2").style.display = "inline";
		$("#events2").addClass("animated fadeInDownBig");
	}, { offset: '45%' });

});