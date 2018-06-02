/*
Just draw a border round the document.body.
*/
document.body.style.border = "5px solid red";
//var date= new Date();
var countDownDate = new Date("jun 25, 2018 17:00:00").getTime();
var secUpdate = setInterval(function(){
	var now = new Date().getTime();
	var distance = countDownDate - now;
	
	var days = Math.floor(distance /(1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
	var minutes = Math.floor(((distance % 1000 * 60 * 60))/(1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60))/1000);
	document.getElementById("tag").innerHTML = days + "days " + hours +"hr " + minutes + "min " + seconds+"sec";
	if (days == 0){
		document.getElementById("tag").innerHTML= hours+ "hr " + minutes+"min ";
	}
	if( hours == 0){
		document.getElementById("tag").innerHTML= minutes+ "min " +seconds+"sec ";
	}
	if(distance < 0){
		clearInterval(secUpdate);
		document.getElementById("tag").innerHTML= "Sorry, you missed it!!"
	}
},1000);
var daysCompleted = new Date("may 27, 2018 9:00:00").getTime();
var dayUpdate = setInterval(function(){
	var now = new Date().getTime();
	var distance =  now - daysCompleted;
	var days = Math.floor(distance /(1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
	var minutes = Math.floor(((distance % 1000 * 60 * 60))/(1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60))/1000);
	document.getElementById("tag2").innerHTML = days + "days "+ hours + "hr ";+
	if(days == 1){
		document.getElementById("tag2").innerHTML= hours + "hr "+ minutes + "min ";
	}
	if(distance < 0){
		clearInterval(dayUpdate);
		document.getElementById("tag").innerHTML= "Sorry, you missed it!!"
	}
	if(days == now.getDay()){
		
	}
},1000);
