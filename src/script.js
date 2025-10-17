let btnWeatherInput = document.getElementById("weatherInput"); //get input text
let btnChangeWeather = document.getElementById("changeBtn");
let message = document.getElementById("message");

//Change background image based on input
btnChangeWeather.onclick = function () {
    //Convert input to lowercase and trim whitespace
    let WeatherInput = btnWeatherInput.value.toLowerCase().trim();
    //Check if input is valid
    switch (WeatherInput) {
        case "rainy":
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1250672/pexels-photo-1250672.jpeg?_gl=1*la1e0p*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NjAyMjAkajM3JGwwJGgw')";
            document.body.style.backgroundSize = "cover";
            btnWeatherInput.value = "";
            message.innerText = "Don't forget your umbrella!"
            break;
        case "sunny":
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?_gl=1*nccale*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NTk4OTgkajM4JGwwJGgw')";
            document.body.style.backgroundSize = "cover";
            btnWeatherInput.value = "";
            message.innerText = "It's a bright and sunny day!"
            break;
        case "cloudy":
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/7919/pexels-photo.jpg?_gl=1*uh7pk5*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NjAzMDMkajE1JGwwJGgw')";
            document.body.style.backgroundSize = "cover";
            message.innerText = "A calm and cloudy day";
            btnWeatherInput.value = "";
            break;
        default:
            document.body.style.backgroundImage = "";
            message.innerText = "";
            btnWeatherInput.value = "";
            // setTimeout(() => {
                alert("Please enter a sunny, rainy, or cloudy");
            // }, 200);
    }

}




