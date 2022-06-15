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

//try to see if I can retrieve the weather data via log

$(document).ready(function () {  
    var currentDate = document.querySelector("#current-day");
    var currentTime = moment();
    currentDate.textContent = currentTime.format("DD MMMM, YYYY.")

    var cityInput = document.querySelector("#input-value");

    var searchFormEl = document.querySelector("#submit");
    var cityButtonsEl = document.querySelector("#city-buttons");


    var cityName = document.querySelector(".city");
    var cityDesc = document.querySelector(".description");
    var cityTemp = document.querySelector(".temperature");

    //var apiUrl = "https:api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=b95ff5e6cd328d61be88a2607348c2e1";

    $(document).on({
        "click": function (e) {
        var cityValue = document.getElementById("input-value").value;
        var apiUrl = "https:api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=b95ff5e6cd328d61be88a2607348c2e1";

        e.preventDefault()

        fetch(apiUrl)
            .then(function(response) {
                if (response.ok) {
                    console.log(response);
                    response.json().then(function(data) {
                        console.log(data);
                    });
                } else {
                    alert("Please enter a valid city name.");
                }
            });
    }}, "#submit")
});