/*
	WEB 303 Assignment 1 - jQuery
	Name: Dennis Kontoulis
	DLM: 2023-09-22
	Student #: 0798883
*/

$(document).ready(function () {
	$('#yearly-salary, #percent').on('keyup', function () {
	  var salary = parseFloat($('#yearly-salary').val());
	  var percent = parseFloat($('#percent').val());
  
	  if (!isNaN(salary) && !isNaN(percent)) {
		var amount = (salary * (percent / 100)).toFixed(2);
		$('#amount').text('$' + amount);
	  } else {
		$('#amount').text('$0.00');
	  }
	});
  });
  