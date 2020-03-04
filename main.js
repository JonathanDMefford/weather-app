let path = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let zip = document.getElementById('zipcode');
let apiKey = '&appid=b19d0b4941d9407a22fb692eeaac3313';
let city = document.getElementById('city');
let tempK = document.getElementById('tempK');
let tempF = document.getElementById('tempF');
let tempC = document.getElementById('tempC');
let conditions = document.getElementById('conditions');
let image = document.getElementById('image');
let info;
//let url = 'https://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=b19d0b4941d9407a22fb692eeaac3313';

document.getElementById('body').style.display = 'none';
function run () {
    if (zip.value.length == 5) {
        weather(zip);
        document.getElementById('body').style.display = 'block';
    }
}

function weather() {
    fetch(path + zip.value + apiKey)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        info = data;
        city.innerHTML = info.name;
        tempK.innerHTML = Math.floor(info.main.temp) + ' ' + '<sup>o</sup>K';
        tempC.innerHTML = Math.floor(info.main.temp - 273) + ' ' + '<sup>o</sup>C';
        tempF.innerHTML = Math.floor((info.main.temp - 273.15) * (9 / 5) + 32) + ' ' + '<sup>o</sup>F';
        conditions.innerHTML = info.weather[0].description;
        image.innerHTML = `<img src='http://openweathermap.org/img/w/${info.weather[0].icon}.png'>`;

        console.log(data);
    })
    .catch((error) => {
        console.log('Error', error);
    })
    
}
