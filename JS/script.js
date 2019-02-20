var allshipvalues = {
	fuel: 60,
	distance: 0,
	food: 50,
}

/* Fuel
____________________________*/
function displayvalue() {
document.getElementById('current-fuel').style.height = allshipvalues.fuel + '%';
document.getElementById('current-fuel').style.marginTop =300- (allshipvalues.fuel*300/100) + 'px';
document.getElementById('percent-fuel').innerHTML = allshipvalues.fuel + '%';
}


/* Food
____________________________*/

function foodvalue() {
document.getElementById('current-food').style.height = allshipvalues.food + '%';
document.getElementById('current-food').style.marginTop =300- (allshipvalues.food*300/100) + 'px';
document.getElementById('percent-food').innerHTML = allshipvalues.food + '%';
}

/* Distance
____________________________*/

function distancevalue() {
	document.getElementById('current-distance').innerHTML = allshipvalues.distance + ' / 54.6M kilometers';
}


/* Converter
____________________________*/

function LengthConverter(valNum) {
  document.getElementById("outputMMiles").innerHTML=valNum/3.2808 + ' Miles';
}

