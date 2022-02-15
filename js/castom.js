"use strict";

let miniDisplay = document.getElementById('miniDis');
let display = document.getElementById('Display');



function button(InValue) {
	display.value = display.value += InValue;
	miniDisplay.value = miniDisplay.value += InValue;
}

function remove() {
	display.value = display.value = "";
	miniDisplay.value = miniDisplay.value = "";
	display.placeholder = "0";
	miniDisplay.placeholder = "0";
}

function bakc() {
	let valueLength = display.value.length;
	let lastValue = display.value.substring(0, valueLength - 1);
	let miniLastValue = miniDisplay.value.substring(0, valueLength - 1);
	display.value = lastValue;
	miniDisplay.value = miniLastValue;
	if (display.value == 0) {
		miniDisplay.value = "";
	}
	if (display.value == miniDisplay.value) {
		
	} else {
		miniDisplay.value = display.value;
	}
}


function rasult() {
	display.value = eval(display.value);
}
