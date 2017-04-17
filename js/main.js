// JavaScript Documentu
"use strict";
function myFunction() {
   	alert("Sorry! That date is already taken!");
	}
	
var i = 0;

setInterval( function changeSlide() {
	var pic = document.getElementById("heroImg");
	var pics = ["http://i1.kym-cdn.com/photos/images/original/000/947/499/634.jpg", "http://socialistreview.org.uk/sites/default/files/field/image/holocaust.jpg", "http://nebula.wsimg.com/d2ca3165252b49fc8df151776e8aa0cf?AccessKeyId=B57932DD12CFB7CA3401&disposition=0&alloworigin=1", "http://www.theholocaustexplained.org/public/cms/70/92/204/268/yN7eKq_web.jpg"];
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
