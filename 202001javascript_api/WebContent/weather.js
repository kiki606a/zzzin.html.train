const weather=document.querySelector(".js-weather");

const API_KEY="ed7bfc32007eb467f8f593eb76d13924";
// API(Application Programming Interface)
// 다른 서버로부터 손쉽게 데이터를 가져 올 수 있다.
const COORDS="coords";

function getWeather(lat,lng){
	fetch(
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
		).then(function(response){
		return response.json();
	}).then(function(json){
		const temperature=json.main.temp;
		const place=json.name;
		weather.innerText=`${temperature}@${place}`;
	});

}

function saveCoords(coordsObj) {
    localStorage.setItem("COORDS", JSON.stringify(coordsObj));
}


function handleGeoSuccess(position) {
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(latitude);
    console.log(longitude);

    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access Geo location");
}


function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords() {
    const COORDS = 'coords';
    const loadedCoords = localStorage.getItem('COORDS');

    if (loadedCoords === null) {
        askForCoords();
    }
    else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init() {
    loadCoords();
}

init();