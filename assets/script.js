function rollercoaster() {
	var div = document.getElementById('rollercoaster');
	var userInput = document.getElementById('userInput');
	str = userInput.value;
	var size = 0;

	for (var i = 0; i < str.length; i++) {
		var span = document.createElement('SPAN');
		var text = document.createTextNode(str[i]);
		span.appendChild(text);

		var midpoint = Math.round(str.length / 2);
		
		if (i <= midpoint) {
			var font = (10 + (i * 5)) + 'px';
		} else {
			font = (5 * (i - (size * 2))) + 'px';
			size++;
		}

		span.style.fontSize = font;
		div.appendChild(span);
	}
	userInput.value = '';
}