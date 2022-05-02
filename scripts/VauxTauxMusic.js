$(document).ready(function() {

$('.heart').click(function(){
  $(this).toggleClass('clicked');
});

$('.shuffle').click(function(){
  $(this).toggleClass('clicked');
});

//show info box on hover
$('#player').hover(function(){ 
  $('.info').toggleClass('up');
});


//music player

let track_list = [
	{name: Tender,
	path: "../music/watch_you_walk/tender.mp3"},
	{name: Broad Beautiful Forehead,
	path: "../music/watch_you_walk/broadBeautifulForehead.mp3"},
	{name: Watch You Walk,
	path: "../music/watch_you_walk/watchYouWalk.mp3"},
	{name: Bad Loop,
	path: "../music/watch_you_walk/badLoop.mp3"},
	{name: 21 Skidoo,
	path: "../music/watch_you_walk/skidoo.mp3"},
	{name: Vaux Taux,
	path: "../music/watch_you_walk/vauxTaux.mp3"},
	{name: SkyMall,
	path: "../music/watch_you_walk/skyMall.mp3"},
	{name: You've Been Here Before (in some way that you're sure),
	path: "../music/watch_you_walk/youveBeenHereBefore.mp3"}
];

$('.pause').hide(); //hide pause button until clicked

//play button
$('.play').click(function(){
  audio.play();
  $('.play').hide();
  $('.pause').show();
});

//pause button
$('.pause').click(function(){
  audio.pause();
  $('.play').show();
  $('.pause').hide();
});

//next button
$('.next').click(function(){
  audio.src = playlist[];
  audio.play();
});

});

