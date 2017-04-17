// JavaScript Documentu
"use strict";
function myFunction() {
   	alert("Sorry! That date is already taken!");
	}
	
var i = 0;

setInterval( function changeSlide() {
	var pic = document.getElementById("heroImg");
	var pics = ["http://i1.kym-cdn.com/photos/images/original/000/947/499/634.jpg"];
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
