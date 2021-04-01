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
    mapboxgl: mapboxgl,
})

var locationName = document.getElementById('geocoder').appendChild(geoLocation.onAdd(map)); //searchbar


var suggestionsShown = document.getElementsByClassName('suggestions');

suggestionsShown.addEventListener('click', function(e){

    console.log('WORKS LAN');
});

// setInterval(function(){ 
//     // var getLocationName = document.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0].value;
//     // document.getElementById('locationNameOutput').innerHTML = getLocationName;




// }, 500);


