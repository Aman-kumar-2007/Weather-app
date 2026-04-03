const apiKey = "0e100cd7614791a8668b14f8682d57ab";
const searchBox = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".image-box img");

async function fetchWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}&units=metric`);
    let data = await response.json();
    console.log(data);
}