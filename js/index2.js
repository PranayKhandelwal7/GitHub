
var Change = function () {
	var currentClassName = document.getElementById('demo').className;
	if (currentClassName == 'cool') {document.getElementById('demo').className = 'cool red'}
		else {document.getElementById('demo').className = 'cool'}
}


	var car = {
	make: 'VW',
	type: 'polo',
	colour: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat 1','seat 2', 'seat 3', 'seat 4'],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('turn car '+isOn);
		if (isOn == true) {
			this.isTurnedOn = true;
		} else { this.isTurnedOn = false;}

	}
};