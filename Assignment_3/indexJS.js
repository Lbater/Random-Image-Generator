//Author: Logan Bateman, 000918989

//Start variable declaration
let pics = [
	"images/AlSqueezy.png","images/Ortiz.png","images/BigVegas.png",
	"images/Claire.png","images/Kaya.png","images/SportyGranny.png",
	"images/Timmeah.png","images/Ty.png","images/AJ.png"
];
let changes = 0;
//End variable declaration

function getRandomInt(max){
	return Math.floor(Math.random() * max);
}

//Start image randomization
let btn = document.querySelector('button');
btn.onclick = function(e){
	document.getElementById('a').innerHTML = "<img src='"+pics[getRandomInt(9)]+"'/>";
	document.getElementById('b').innerHTML = "<img src='"+pics[getRandomInt(9)]+"'/>";
	document.getElementById('c').innerHTML = "<img src='"+pics[getRandomInt(9)]+"'/>";
	changes+=3;
	document.getElementById('p').innerHTML = changes;
}

let imga = document.getElementById('a');
imga.onclick = function(e){
	function do_animationA( event ){
		target = event.srcElement;
		target.classList.remove('a');
		setTimeout( () => {target.classList.add('a');}, 0);
	}
	document.getElementById('a').innerHTML = "<img src='"+pics[getRandomInt(9)]+"'/>";
	changes += 1;
	document.getElementById('p').innerHTML = changes;
}


let imgb = document.getElementById('b');
imgb.onclick = function(e){
	function do_animationA( event ){
		target = event.srcElement;
		target.classList.remove('b');
		setTimeout( () => {target.classList.add('b');}, 0);
	}
	document.getElementById('b').innerHTML = "<img src='"+pics[getRandomInt(9)]+"'/>";
	changes += 1;
	document.getElementById('p').innerHTML = changes;
}

let imgc = document.getElementById('c');
imgc.onclick = function(e){
	function do_animationA( event ){
		target = event.srcElement;
		target.classList.remove('c');
		setTimeout( () => {target.classList.add('c');}, 0);
	}
	document.getElementById('c').innerHTML = "<img src='"+pics[getRandomInt(9)]+"'/>";
	changes += 1;
	document.getElementById('p').innerHTML = changes;
}
//End image randomization

//Start timer shennannigans
function myTimer() {
	let pics = [
		"images/AlSqueezy.png","images/Ortiz.png","images/BigVegas.png",
		"images/Claire.png","images/Kaya.png","images/SportyGranny.png",
		"images/Timmeah.png","images/Ty.png","images/AJ.png"
	];

	for(let i=0;i<9;i++){
		document.getElementById('a').innerHTML = "<img src='"+pics[getRandomInt(8)]+"'/>";
		document.getElementById('b').innerHTML = "<img src='"+pics[getRandomInt(8)]+"'/>";
		document.getElementById('c').innerHTML = "<img src='"+pics[getRandomInt(8)]+"'/>";
	}
	changes += 3;
	document.getElementById('p').innerHTML = changes;
}

function counter(){
	let barElement = document.getElementById('myBar');
	if(count >= 0){
		if(count < 1.6){
			barElement.style.backgroundColor = "red";
			barElement.style.color = "white";
		}else if(count < 3){
			barElement.style.backgroundColor = "yellow";
			barElement.style.color = "black";
		}else{
			barElement.style.backgroundColor = "green";
			barElement.style.color = "black";
		}
		barElement.innerHTML = count.toFixed(1);
		count -= 0.1;
	} else if(input.value > 0){
		if(input.value >= 500 && input.value <=10000){
			count = input.value / 1000;
			myTimer();
		}else{
			progress = count;
			barElement.innerHTML="OUT OF RANGE TRY AGAIN";
			barElement.style.backgroundColor = "red";
			barElement.style.color = "white";
		}
		
	}else{ 
		count = 2500 / 1000;
		myTimer();
	}
}
//End of timer shennannigans

//This makes the timer, counter and progress bar go at the start
let count = 2500;
let myVar = setInterval(myTimer, count);
if (count >= 500 && count <= 10000){
	count /= 1000;
	document.getElementById('myBar').innerHTML = count;
	clearInterval(myVar)
	myVar = setInterval(counter,100);
}else{ 
	
}
