//AS A traveler
//I WANT to see the weather outlook for multiple cities
//SO THAT I can plan a trip accordingly
//remember: DO THIS SMALL STEP BY SMALL STEP. 

//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
    //Search function.
    //Button that will take text value from input field and retrieve weather data of that city
    //If text is invalid/not a city, user will be alerted to enter a valid city.
    //Most recent search should be saved in text area, but colour of text should be grey. 
    //Function that fills in the gaps of the url in the requestUrl variable ( https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} ) https://api.openweathermap.org/data/2.5/onecall?lat=" + textLat + "&lon=" + textLon "&exclude=" + textPart + "&appid={API key}"


//waits for page to be ready
$(document).ready(function () {  
    var currentDate = document.querySelector("#current-day");
    var currentTime = moment();
    currentDate.textContent = currentTime.format("DD MMMM, YYYY.")

    var cityInput = document.querySelector("#input-value");

    var searchFormEl = document.querySelector("#submit");
    var cityButtonsEl = document.querySelector("#city-buttons");

    var weatherEl = document.querySelector("#weather-section");
    var cityName = document.querySelector(".city");
    var cityDesc = document.querySelector(".description");
    var cityTemp = document.querySelector(".temperature");

    //var apiUrl = "https:api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=220ff34db8df0fb665355972020ec55c";

    //var iconcode = a.weather[0].icon;
    //var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    //clicking search button will fetch api data
    $(document).on({
        "click": function (e) {
        //prior to click, current-weather should be hidden so there are no empty values
        weatherEl.classList.remove("hide");

        var cityValue = document.getElementById("input-value").value;
        
        var apiUrl = "https:api.openweathermap.org/data/2.5/weather?&units=metric&q=" + cityValue + "&appid=220ff34db8df0fb665355972020ec55c";

        //var forecastUrl = "https:api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&appid=220ff34db8df0fb665355972020ec55c";

        e.preventDefault()
        
        //elements current day
        var tempEl = document.querySelector("#temp");
        var windEl = document.querySelector("#wind");
        var humEl = document.querySelector("#hum");
        var uvEl = document.querySelector("#uv");
        var iconEl = document.querySelector("#icon");

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            //data current day
            var tempData = data['main']['temp'];
            var windData = data['wind']['speed'];
            var humData = data['main']['humidity'];
            //var uvDada = data['']
            var icon = data['weather'][0]['icon'];

            //fetch weather icon
            var iconUrl = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon + "@2x.png' />"

            //fill elements with fetched weather data current day
            iconEl.innerHTML = iconUrl;
            humEl.innerHTML = humData;
            tempEl.innerHTML = tempData;
            windEl.innerHTML = windData;


            console.log(data);

            var coordinates = {
                lat: data['coord']['lat'],
                lon: data['coord']['lon']
            };

            var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&appid=220ff34db8df0fb665355972020ec55c"
            fetch(oneCall)
            .then(response => response.json())
            .then(data => {
                var uvData = data['current']['uvi']
                uvEl.innerHTML = uvData;
                console.log(data)
            })
        })

        //fetch(forecastUrl)
           // .then(function(response) {
            //    if (response.ok) {
             //       console.log(response);
             //       response.json().then(function(data) {
             //           console.log(data);
                        //displayForecast(date_iso, wind, humidity, temp);
             //       });
               // } else {
               //     alert("Please enter a valid city name.");
               // }
            //});
    }}, "#submit")

    var displayWeather = function (date_iso, wind, humidity, temp) {
        weatherSearchTerm.textContent = temp;

        for (var i = 0; i < temp.length; i++) {
            var tempature = temp[i].main;
            var tempEl = document.createElement("p");
            
        }
    }
});


//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity   
    //Fetch function that generates and appends li elements with fetched weather information. 
    //After website is functional, refactor so that JQuery generates all HTML content. 

//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
    //colour coding.
    //For loop that will create a range of numbers to represent UV index. If-then statement that checks for loop ranges and colorur codes accordingly.

    //code template
    /* but for UV index ranges
    function colourCode() {
        for (var i = 9; i <= 17; i++) {
            
            if (hour==i) {
                $(`#text-area${i}`).addClass("present");
            } else if (hour > i){
                $(`#text-area${i}`).addClass("past");
            } else if (hour < i) {
                $(`#text-area${i}`).addClass("future");
            } 
        }
    }
*/
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city.
    //Each time a valid search is made, the text content will be made into the text content of a button and appended to recent-cities div.
    //Generates buttons with click events.
    //Function for each button will use text content to fetch data of that city.