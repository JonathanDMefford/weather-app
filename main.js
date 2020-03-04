var path = 'https://openweathermap.org/find?q=london';
const apiKey = 'b19d0b4941d9407a22fb692eeaac3313';
let city = document.getElementById('city');
let tempK = document.getElementById('tempK');
let tempF = document.getElementById('tempF');
let tempC = document.getElementById('tempC');
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=b19d0b4941d9407a22fb692eeaac3313';
let info;
function weather() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            info = data;
            city.innerHTML = info.name;
            tempK.innerHTML = Math.floor(info.main.temp) + ' ' + '<sup>o</sup>K';
            tempC.innerHTML = Math.floor(info.main.temp - 273) + ' ' + '<sup>o</sup>C';
            tempF.innerHTML = Math.floor((info.main.temp - 273.15) * (9/5) + 32) + ' ' + '<sup>o</sup>F';
            console.log(data);
        })
        .catch((error) => {
            console.log('Error', error);
        })

}
weather();