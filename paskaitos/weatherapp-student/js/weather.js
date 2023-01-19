let weather = {
    apiKey: "f0bc71d18aafe3aebdf39f23d6e7e274",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => {
            if(!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.")
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".icon").alt = name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + " m/s";
        document.querySelector(".weather").classList.remove(".loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function() {
    if(event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Vilnius");