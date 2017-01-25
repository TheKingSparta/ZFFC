// JavaScript Documentu
"use strict";
function myFunction() {
   	alert("Sorry! That date is already taken!");
	}
	
var i = 0;

setInterval( function changeSlide() {
	var pic = document.getElementById("heroImg");
	var pics = ["img/gym.jpg", "img/lazerTag.jpg", "img/snackBar.jpg", "img/swimmingPool.jpg", "img/bumpercars3.jpg"];
	pic.src = pics[i];
	i++;
	if (i >= pics.length)
	{
		i = 0;
	}
	}, 3000);
	
	function sorry(){
	 alert("Sorry for the inconvenience, but our servers appear to be down for maintenance. Try again later!");
	}