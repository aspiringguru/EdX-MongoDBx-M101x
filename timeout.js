//from chapter 4
setTimeout(function() {
	//https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args
	//setTimeout(callback, delay[, ...args])
	//NB: delay in milliseconds
  console.log('In timeout!...');
}, 5000);

console.log('Not in timeout');
