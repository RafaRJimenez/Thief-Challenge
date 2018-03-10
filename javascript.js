var choosing=document.getElementsByClassName("decision");
var next;
var items;

choosing[0].addEventListener('click', play, false);
choosing[1].addEventListener('click', dontPlay, false);

function play(){
	var answerYes = document.createElement('div');
	answerYes.innerHTML="<div class='play'>AWESOME!!! You got the money and everything will be fine</div><div class='bank'><img src='media/bank.jpg'><div class = 'next'><img src='media/Next.gif'></div></div>";
	document.body.appendChild(answerYes);
	next=document.getElementsByClassName("next");
	next[0].addEventListener('click', thiefAppears, false);

}

function dontPlay(){
	var answerNo = document.createElement('div');
	answerNo.innerHTML="<div class='dontPlay'>GAME OVER!!! YOU ARE GONNA KEEP PLAYING FIFA 98</div><div class='fifa'><img src='media/fifa.png'></div>";
	document.body.appendChild(answerNo);
}



function thiefAppears(){
    var thief = document.createElement('div');
    thief.innerHTML= 
    "<div class='assault'>AUGGGGHHH! LOOKS LIKE SOMEBODY IS INTERESTED IN YOUR MONEY. YOU NEED TO SORT IT OUT!</div><div class='thief'><img src='media/thief.jpg'></div><div class ='assault'>HOW DO YOU WANT TO GET RID OF HIM?</div>"+
    "<div class='weapons'><div class='item'><img src='media/punch.jpg'></div><div class='item'><img src='media/police.jpg'></div><div class='item'><img src='media/running.jpg'></div></div>";
    document.body.appendChild(thief);
    items=document.getElementsByClassName("item");
    items[0].addEventListener('click', punch, false);
    items[1].addEventListener('click', police, false);
    items[2].addEventListener('click', running, false);
}

function punch(){
	var fight = document.createElement('div');
	fight.innerHTML="<div class='assault'>WHAT A PITY!! HE HAD A KNIFE AND WAS FASTER THAN YOU. <br>YOU LOSE THE MONEY BUT WIN A CUT IN YOUR NECK </div>"+
	"<div class='hospital'><img src='media/hospital.jpg'></div>";
	document.body.appendChild(fight);
}

function police(){
	
}

function running(){

}