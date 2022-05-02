$(document).ready(function() {
	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
		  height: '315',
		  width: '560',
		  videoId: '7VnkZ0cKu0U'
		});
	}
 	player.playVideo();		
});