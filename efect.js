//Variables
var minutes = 25;
var seconds = "00";
//Audios extras
var click = new Audio("music/netflixStart.mp3")
var bell = new Audio("music/bell.mp3")
//Funcion del template de inicio del reloj
function template() {
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
}
//Funcion para iniciar el reloj y sonido
function start() {
	click.play();

	minutes = 24;
	seconds = 59;

	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	var minutes_interval = setInterval(minutesTimer, 60000);
	var seconds_interval = setInterval(secondsTimer, 1000);

	function minutesTimer() {
		minutes = minutes - 1;
		document.getElementById("minutes").innerHTML = minutes;
	}

	function secondsTimer() {
		seconds = seconds - 1;
		document.getElementById("seconds").innerHTML = seconds;

		if (seconds <= 0) {
			if (minutes <= 0) {
				clearInterval(minutes_interval);
				clearInterval(seconds_interval);

				document.getElementById("done").innerHTML = "Descansa!"
				document.getElementById("done").classList.add("mensaje")

				bell.play();
			}
			seconds = 60
		}
	}
}
//Funcion boton reset
function stop(){
  location.reload();   
}
