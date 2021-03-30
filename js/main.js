// mapbox

mapboxgl.accessToken = 'pk.eyJ1IjoibWlpbG8wdyIsImEiOiJja21heGhuczgxdzZpMnlrbmJlaG1pZWtpIn0.x9lZ8TM64di7MVqvEq4vSA';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

var geoLocation = new MapboxGeocoder({ // Create to be able to access my token
    accessToken: mapboxgl.accessToken, 
    mapboxgl: mapboxgl

});


document.getElementById('geocoder').appendChild(geoLocation.onAdd(map));


// Weather

// var key = 'dc63d1b39e1309ba418adb073ef2f8a8';
// fetch('https://api.openweathermap.org/data/2.5/weather?id=' + '2747891'+ '&appid=' + key)
// .then(function(resp) { return resp.json() }) // Convert data to json
// .then(function(data) {
//   console.log(data);
// })
// .catch(function() {
  // catch any errors
});
