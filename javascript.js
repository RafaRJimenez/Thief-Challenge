var choosing=document.getElementsByClassName("decision");


choosing[0].addEventListener('click', play, false);
choosing[1].addEventListener('click', dontPlay, false);

function play(){
	
}

function dontPlay(){
	var answerNo = document.createElement('div');
	answerNo.innerHTML="<div class='dontPlay'>GAME OVER!!! YOU ARE GONNA KEEP PLAYING FIFA 98</div><div class='fifa'><img src='media/fifa.png'></div>";
	document.body.appendChild(answerNo);
}

