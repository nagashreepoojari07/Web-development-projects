var numsquares = 6;
var colors = [];
var pickcolor;

var colordisplay = document.getElementById("colordisplay");
var heading = document.querySelector("h1");
var modebuttons = document.querySelectorAll(".mode");
var resetbutton = document.querySelector("#reset");
var messagedisplay = document.querySelector("#messege")
var squares = document.querySelectorAll(".square")



init();

function init(){
	setupmodebuttonlistners();
	setupsquares();
	reset();
}

function setupmodebuttonlistners(){
	for(var i=0;i<modebuttons.length;i++){
		modebuttons[i].addEventListener("click", function(){
			modebuttons[0].classList.remove("selected");
			modebuttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.innerHTML === "EASY" ? numsquares = 3: numsquares = 6;
			reset();
		});
	}
}

function setupsquares(){
	for(var i =0;i<squares.length; i++){
	
	squares[i].addEventListener("click",function(){
	
		var clickcolor = this.style.backgroundColor;
		
		if(clickcolor === pickcolor)
		{
			messagedisplay.innerHTML = "correct";
			resetbutton.innerHTML = "Play Again?"
			changecolor(clickcolor);
			heading.style.background = clickcolor;
		}
		else{
			this.style.background = "#232323";
			messagedisplay.innerHTML = "try again"
		}

		});
	}
}


function reset(){
	colors = generaterandomcolors(numsquares);

	pickcolor = pickedcolor();

	colordisplay.innerHTML = pickcolor;

	messagedisplay.innerHTML ="";

	resetbutton.innerHTML = "New Colors"

	for(var i =0;i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	heading.style.background = "steelblue";
}


resetbutton.addEventListener("click", function(){
	reset();
})


colordisplay.innerHTML = pickcolor;


function changecolor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
	heading.style.backgroundColor = color;
}


function generaterandomcolors(num){
	var arr = [];

	for(var i=0;i<num;i++){
		arr.push(randomcolor())
	}

	return arr;
}




function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g +", " + b + ")";

}

function pickedcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random]
}


