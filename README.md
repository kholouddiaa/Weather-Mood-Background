# 🌤 Weather Mood Background

A simple and interactive web application that changes the background image based on the weather mood entered by the user.

Built using **HTML, CSS, and JavaScript**, this project demonstrates DOM manipulation, event handling, and dynamic styling.

---

## ✨ Features

- ✅ Change background based on weather input
- ✅ Supports 3 weather modes: **sunny**, **rainy**, **cloudy**
- ✅ Displays a custom message for each weather type
- ✅ Prevents empty input with validation message
- ✅ Allows pressing **Enter** to trigger the change button
- ✅ Uses real background images from Pexels
- ✅ Simple and clean UI

---

## 🧠 How It Works

1. The user types a weather mode inside the input box.
2. Supported inputs are:
   - `sunny`
   - `rainy`
   - `cloudy`
3. When the user clicks the button (or presses Enter):
   - The page background updates instantly.
   - A message appears based on the selected weather.
4. If the input is invalid, the user gets an error message.

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (DOM Manipulation)**

---

## 🎯 Supported Weather Modes

| Input | Background | Message |
|------|------------|---------|
| sunny | Sunny image | It's a bright and sunny day! |
| rainy | Rainy image | Don't forget your umbrella! |
| cloudy | Cloudy image | A calm and cloudy day |

---

## ⚙️ Installation & Run

1️⃣ Clone the repository:

```bash
git clone https://github.com/kholouddiaa/Weather-Mood-Background.git
````

2️⃣ Open the project folder:

```bash
cd Weather-Mood-Background
```

3️⃣ Run the project:

Simply open `index.html` in your browser.

---

## 📌 Example JavaScript Logic

```js
const value = weatherInput.value.toLowerCase().trim();

if (value === "rainy") {
    document.body.style.backgroundImage = rainy;
    message.innerText = "Don't forget your umbrella!";
} else if (value === "sunny") {
    document.body.style.backgroundImage = sunny;
    message.innerText = "It's a bright and sunny day!";
} else if (value === "cloudy") {
    document.body.style.backgroundImage = cloudy;
    message.innerText = "A calm and cloudy day";
} else {
    document.body.style.backgroundImage = "";
    message.innerText = 'Please enter a "sunny", "rainy", or "cloudy"';
}
```

---

## 🌟 Future Enhancements

* Add more weather types (snowy, stormy, windy)
* Add weather icons
* Add smooth transition animation between backgrounds
* Add background music depending on mood
* Add dropdown selection instead of text input

---

## 👩‍💻 Developer

**Kholoud Diaa**
Frontend Developer

---

## 📄 License

This project is open-source and created for educational and portfolio purposes.
