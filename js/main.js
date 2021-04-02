// mapbox


mapboxgl.accessToken = 'pk.eyJ1IjoibWlpbG8wdyIsImEiOiJja21heGhuczgxdzZpMnlrbmJlaG1pZWtpIn0.x9lZ8TM64di7MVqvEq4vSA';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [4.288788, 52.078663], // starting position [lng, lat]
zoom: 9 // starting zoom
});

var coorLat = 52.078663;
var coorLon = 4.288788;



var geoLocation = new MapboxGeocoder({ // toegang tot mijn token
    accessToken: mapboxgl.accessToken, 
    mapboxgl: mapboxgl,

    getItemValue: e =>{
        coorLon = e['center'][0];
        coorLat = e['center'][1];
          document.getElementsByClassName('mapboxgl-ctrl-geocoder--input').value = e['place_name']; //lat
          return e['place_name'];
        }
   
});






var locationName = document.getElementById('geocoder').appendChild(geoLocation.onAdd(map)); //toevoegen van zoekbalk

setInterval(function(){ 

    
    var getLocationName = document.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0].value; // waarde vanuit de zoekbalk
    document.getElementById('locationNameOutput').innerHTML = getLocationName;// locatie naam latenzien

      //weather

      const key = 'd25be8eef3d94997a5b8d5df3bb7e8b3'; //Key voor API
      var temp = document.getElementById('showWeatherTemp');
      var weatherIcon = document.getElementById('weatherIcon');
      
      fetch('https://api.weatherbit.io/v2.0/current?lat=' + coorLat + '&lon=' + coorLon +'&key=' + key+ '&include=minutely') // Haalt data van openweather API
          .then(res => res.json())
          .then(data => {
   
   
             temp.innerHTML = data['data'][0].temp + ' °C';
        
   
          
              })
          .catch(err => console.log('Fill city name!'))
              

}, 2000);







// weather

