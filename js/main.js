// mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibWlpbG8wdyIsImEiOiJja21heGhuczgxdzZpMnlrbmJlaG1pZWtpIn0.x9lZ8TM64di7MVqvEq4vSA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/miilo0w/ckn1hy44p24w517ny2us3vcml', // style URL
    center: [4, 52], // starting position [lng, lat]
    zoom: 5 // starting zoom
});

var coorLat; // global scope 
var coorLon; // global scope

var geoLocation = new MapboxGeocoder({ // toegang tot mijn token
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,

    getItemValue: e => {
        coorLon = e['center'][0];
        coorLat = e['center'][1];
        document.getElementsByClassName('mapboxgl-ctrl-geocoder--input').value = e['place_name']; //lat
        return e['place_name'];
    }

});

//weather

const key = '4541adfd22cd4fd0acc7932a82ddac62'; //Key voor API weather
var temp = document.getElementById('showWeatherTemp');
var weatherIcon = document.getElementById('weatherIcon');
weatherIcon.src = 'images/errorIcon.svg'; // default img



var locationName = document.getElementById('geocoder').appendChild(geoLocation.onAdd(map)); //toevoegen van zoekbalk

setInterval(function () {
    fetch('https://api.weatherbit.io/v2.0/current?lat=' + coorLat + '&lon=' + coorLon + '&key=' + key + '&include=minutely') // Haalt data van openweather API
        .then(res => res.json())
        .then(data => {
            temp.innerHTML = data['data'][0].temp + ' °C';
            console.log(data['data'][0].temp);
            var weatherCode = data['data'][0].weather.code;
            var statusLanding = document.getElementById('showStatusForLanding');

            // alle weer mogelijkheden
            let thunderstorm = weatherCode >= 200 && weatherCode <= 232;
            let hail = weatherCode == 233;
            let rain = weatherCode >= 300 && weatherCode <= 522;
            let sleet = weatherCode == 611 || weatherCode == 612;
            let snow = (weatherCode >= 600 && weatherCode <= 610) && (weatherCode >= 621 && weatherCode <= 623);
            let haze = weatherCode >= 700 && weatherCode <= 751;
            let sun = weatherCode == 800;
            let lessCloud = weatherCode == 801 || weatherCode == 802;
            let MoreCloud = weatherCode == 803 || weatherCode == 804;


            switch (true) { //Check wat voor weer het is 
                case thunderstorm:
                    weatherIcon.src = 'images/Thunderstorm.svg';
                    statusLanding.innerHTML = 'It is dangerous to land here!';
                    break;

                case hail:
                    weatherIcon.src = 'images/Hail.svg';
                    statusLanding.innerHTML = 'It is dangerous to land here!';
                    break;

                case rain:
                    weatherIcon.src = 'images/Rain.svg';
                    statusLanding.innerHTML = 'It is ok to land.. but slippery!';
                    break;

                case sleet:
                    weatherIcon.src = 'images/Sleet.svg';
                    statusLanding.innerHTML = 'It is safe to land!';
                    break;

                case snow:
                    weatherIcon.src = 'images/Snow.svg';
                    statusLanding.innerHTML = 'It is ok to land.. but very slippery!';
                    break;

                case haze:
                    weatherIcon.src = 'images/FogAndHaze.svg';
                    statusLanding.innerHTML = 'It is safe to land!';
                    break;

                case sun:
                    weatherIcon.src = 'images/Sun.svg';
                    statusLanding.innerHTML = 'It is safe to land!';
                    break;

                case lessCloud:
                    weatherIcon.src = 'images/LessCloud.svg';
                    statusLanding.innerHTML = 'It is safe to land!';
                    break;

                case MoreCloud:
                    weatherIcon.src = 'images/MoreCloud.svg';
                    statusLanding.innerHTML = 'It is safe to land!';
                    break;
            }
        }).catch(err => temp.innerHTML = ' - °C')


    var getLocationName = document.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0].value; // waarde vanuit de zoekbalk
    document.getElementById('locationNameOutput').innerHTML = getLocationName; // locatie naam latenzien

}, 2000);