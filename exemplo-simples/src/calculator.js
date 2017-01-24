'use strict';
window.calculator = window.calculator || {};

(function() {
	var getIntById = function(id) {
		return parseInt($(`#${id}`).val(), 10);
	};

	var calculate = function() {
		var sum = getIntById('x') + getIntById('y');
		$('#result').html(isNaN(sum) ? 0 : sum);
	};

	window.calculator.init = function() {
		$('#add').on('click', calculate);
	};
})();