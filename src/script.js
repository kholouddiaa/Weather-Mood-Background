//get input textbox, button, and message elements
const weatherInput = document.getElementById("weatherInput");
const btnChangeWeather = document.getElementById("changeBtn");
const message = document.getElementById("message");
const sunny = "url('https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg')";
const rainy = "url('https://images.pexels.com/photos/1250672/pexels-photo-1250672.jpeg')";
const cloudy = "url('https://images.pexels.com/photos/7919/pexels-photo.jpg')";

const arr = [rainy, sunny, cloudy];
//Allow Enter key to trigger button click
weatherInput.addEventListener("keyup", e => {
    if (e.key === "Enter") btnChangeWeather.click();
});
//Change background image based on input
btnChangeWeather.addEventListener("click", function () {
    //Convert input to lowercase and trim whitespace
    const value = weatherInput.value.toLowerCase().trim();
    if (!value) {
        message.innerText = "Please type something!";
        return;
    }

    // convert input (value) to index in arr
    let index;

    if (value === "rainy") {
        index = 0;
    } else if (value === "sunny") {
        index = 1;
    } else if (value === "cloudy") {
        index = 2;
    }

    //Check if input is valid
    switch (index) {
        case 0://rainy
            document.body.style.backgroundImage = arr[0];
            document.body.style.backgroundSize = "cover";
            message.innerText = "Don't forget your umbrella!"
            break;
        case 1: //sunny
            document.body.style.backgroundImage = arr[1];
            document.body.style.backgroundSize = "cover";
            message.innerText = "It's a bright and sunny day!"
            break;
        case 2: //cloudy
            document.body.style.backgroundImage = arr[2];
            document.body.style.backgroundSize = "cover";
            message.innerText = "A calm and cloudy day";
            break;
        default:
            document.body.style.backgroundImage = "";
            message.innerText = 'Please enter a "sunny", "rainy", or "cloudy"';
    }

    weatherInput.value = "";
});
