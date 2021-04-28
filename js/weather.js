function jamWeather( cityID ) {
    const key = '36b0cb3cb023b5ca88c3bbb39ec8fbcb';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
      drawWeather(data);
    })
    .catch(function() {
    });
  }
  
  window.onload = function() {
    jamWeather( 2643743 );    
  }

  function drawWeather( d ) {
	let celcius = Math.round(parseFloat(d.main.temp)-273.15);
	let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;

    
}
