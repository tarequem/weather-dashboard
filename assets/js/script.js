//waits for page to be ready
$(document).ready(function () {  
    var currentDate = document.querySelector("#current-day");
    var currentTime = moment();
    currentDate.textContent = currentTime.format("DD MMMM, YYYY.")
    var cityList = document.querySelector("#city-buttons");
    var weatherEl = document.querySelector("#weather-section");

    //clicking search button will fetch api data
    $(document).on({
        "click": function (e) {       
        
        e.preventDefault()

        //prior to click, current-weather should be hidden so there are no empty values
        weatherEl.classList.remove("hide");

        //creates a button for every search
        var cityValue = document.getElementById("input-value").value;     
        var searchCityEl = document.createElement("button");
        searchCityEl.innerHTML = cityValue;
        cityList.appendChild(searchCityEl);

        //initiates click function for previous searches 
        searchCityEl.onclick = function() {
            getWeather();
        }
        
        //APIs for weather
        var apiUrl = "https:api.openweathermap.org/data/2.5/weather?&units=metric&q=" + cityValue + "&appid=220ff34db8df0fb665355972020ec55c";
        var apiUrlButton = "https:api.openweathermap.org/data/2.5/weather?&units=metric&q=" + searchCityEl.value + "&appid=220ff34db8df0fb665355972020ec55c";

        //fetch function for previous searches
        var getWeather = function() {
            //fetches data for current weather
            fetch(apiUrl || apiUrlButton)
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

                //defines coordinates for searched city
                var coordinates = {
                    lat: data['coord']['lat'],
                    lon: data['coord']['lon']
                };

                //fetches data for uv and for 5 day forecast
                var oneCall = "https://api.openweathermap.org/data/2.5/onecall?&units=metric&lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&appid=220ff34db8df0fb665355972020ec55c"
                fetch(oneCall)
                .then(response => response.json())
                .then(data => {
                    var uvData = data['current']['uvi']
                    uvEl.innerHTML = uvData;
                    console.log(data)

                    //colour coding for UV Index
                    for (var i = 0; i <= 11; i++){
                        if (uvData < 3) {
                            uvEl.classList.add("lowUV");
                        } else if (uvData > 3 && uvData < 6) {
                            uvEl.classList.add("moderateUV");
                        } else if (uvData > 6 && uvData < 8) {
                            uvEl.classList.add("highUV");
                        } else if (uvData > 8 && uvData < 11) {
                            uvEl.classList.add("veryhighUV");
                        } else if (uvData > 11) {
                            uvEl.classList.add("extremeUV");
                        }
                    }

                    //fetches data for each day of 5 day forecast, fills in html with data. 
                    //day 1
                    var tempData1 = data['daily']['1']['temp']['max'];
                    var windData1 = data['daily']['1']['wind_speed'];
                    var humData1 = data['daily']['1']['humidity'];
                    var icon1 = data['daily']['1']['weather']['0']['icon'];
                    var iconUrl1 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon1 + "@2x.png' />"

                    tempEl1.innerHTML = tempData1;
                    windEl1.innerHTML = windData1;
                    humEl1.innerHTML = humData1;
                    iconEl1.innerHTML = iconUrl1;

                    //day 2
                    var tempData2 = data['daily']['2']['temp']['max'];
                    var windData2 = data['daily']['2']['wind_speed'];
                    var humData2 = data['daily']['2']['humidity'];
                    var icon2 = data['daily']['2']['weather']['0']['icon'];
                    var iconUrl2 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon2 + "@2x.png' />"

                    tempEl2.innerHTML = tempData2;
                    windEl2.innerHTML = windData2;
                    humEl2.innerHTML = humData2;
                    iconEl2.innerHTML = iconUrl2;

                    //day 3
                    var tempData3 = data['daily']['3']['temp']['max'];
                    var windData3 = data['daily']['3']['wind_speed'];
                    var humData3 = data['daily']['3']['humidity'];
                    var icon3 = data['daily']['3']['weather']['0']['icon'];
                    var iconUrl3 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon3 + "@2x.png' />"

                    tempEl3.innerHTML = tempData3;
                    windEl3.innerHTML = windData3;
                    humEl3.innerHTML = humData3;
                    iconEl3.innerHTML = iconUrl3;

                    //day 4
                    var tempData4 = data['daily']['4']['temp']['max'];
                    var windData4 = data['daily']['4']['wind_speed'];
                    var humData4 = data['daily']['4']['humidity'];
                    var icon4 = data['daily']['4']['weather']['0']['icon'];
                    var iconUrl4 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon4 + "@2x.png' />"

                    tempEl4.innerHTML = tempData4;
                    windEl4.innerHTML = windData4;
                    humEl4.innerHTML = humData4;
                    iconEl4.innerHTML = iconUrl4;

                    //day 5
                    var tempData5 = data['daily']['5']['temp']['max'];
                    var windData5 = data['daily']['5']['wind_speed'];
                    var humData5 = data['daily']['5']['humidity'];
                    var icon5 = data['daily']['5']['weather']['0']['icon'];
                    var iconUrl5 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon5 + "@2x.png' />"

                    tempEl5.innerHTML = tempData5;
                    windEl5.innerHTML = windData5;
                    humEl5.innerHTML = humData5;
                    iconEl5.innerHTML = iconUrl5;
                })
                
                
            })
        }
        
        //elements for current day
        var tempEl = document.querySelector("#temp");
        var windEl = document.querySelector("#wind");
        var humEl = document.querySelector("#hum");
        var uvEl = document.querySelector("#uv");
        var iconEl = document.querySelector("#icon");

        //defines five day forecast html elements
        var tempEl1 = document.querySelector("#temp1");
        var windEl1 = document.querySelector("#wind1");
        var humEl1 = document.querySelector("#hum1");
        var iconEl1 = document.querySelector("#icon1");

        var tempEl2 = document.querySelector("#temp2");
        var windEl2 = document.querySelector("#wind2");
        var humEl2 = document.querySelector("#hum2");
        var iconEl2 = document.querySelector("#icon2");

        var tempEl3 = document.querySelector("#temp3");
        var windEl3 = document.querySelector("#wind3");
        var humEl3 = document.querySelector("#hum3");
        var iconEl3 = document.querySelector("#icon3");

        var tempEl4 = document.querySelector("#temp4");
        var windEl4 = document.querySelector("#wind4");
        var humEl4 = document.querySelector("#hum4");
        var iconEl4 = document.querySelector("#icon4");

        var tempEl5 = document.querySelector("#temp5");
        var windEl5 = document.querySelector("#wind5");
        var humEl5 = document.querySelector("#hum5");
        var iconEl5 = document.querySelector("#icon5");

            //fetches data for current weather
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

                //defines coordinates for searched city
                var coordinates = {
                    lat: data['coord']['lat'],
                    lon: data['coord']['lon']
                };

                //fetches data for uv and for 5 day forecast
                var oneCall = "https://api.openweathermap.org/data/2.5/onecall?&units=metric&lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&appid=220ff34db8df0fb665355972020ec55c"
                fetch(oneCall)
                .then(response => response.json())
                .then(data => {
                    var uvData = data['current']['uvi']
                    uvEl.innerHTML = uvData;
                    console.log(data)

                    //colour coding for UV Index
                    for (var i = 0; i <= 11; i++){
                        if (uvData < 3) {
                            uvEl.classList.add("lowUV");
                        } else if (uvData > 3 && uvData < 6) {
                            uvEl.classList.add("moderateUV");
                        } else if (uvData > 6 && uvData < 8) {
                            uvEl.classList.add("highUV");
                        } else if (uvData > 8 && uvData < 11) {
                            uvEl.classList.add("veryhighUV");
                        } else if (uvData > 11) {
                            uvEl.classList.add("extremeUV");
                        }
                    }

                    //fetches data for each day of 5 day forecast, fills in html with data. 
                    //day 1
                    var tempData1 = data['daily']['1']['temp']['max'];
                    var windData1 = data['daily']['1']['wind_speed'];
                    var humData1 = data['daily']['1']['humidity'];
                    var icon1 = data['daily']['1']['weather']['0']['icon'];
                    var iconUrl1 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon1 + "@2x.png' />"

                    tempEl1.innerHTML = tempData1;
                    windEl1.innerHTML = windData1;
                    humEl1.innerHTML = humData1;
                    iconEl1.innerHTML = iconUrl1;

                    //day 2
                    var tempData2 = data['daily']['2']['temp']['max'];
                    var windData2 = data['daily']['2']['wind_speed'];
                    var humData2 = data['daily']['2']['humidity'];
                    var icon2 = data['daily']['2']['weather']['0']['icon'];
                    var iconUrl2 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon2 + "@2x.png' />"

                    tempEl2.innerHTML = tempData2;
                    windEl2.innerHTML = windData2;
                    humEl2.innerHTML = humData2;
                    iconEl2.innerHTML = iconUrl2;

                    //day 3
                    var tempData3 = data['daily']['3']['temp']['max'];
                    var windData3 = data['daily']['3']['wind_speed'];
                    var humData3 = data['daily']['3']['humidity'];
                    var icon3 = data['daily']['3']['weather']['0']['icon'];
                    var iconUrl3 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon3 + "@2x.png' />"

                    tempEl3.innerHTML = tempData3;
                    windEl3.innerHTML = windData3;
                    humEl3.innerHTML = humData3;
                    iconEl3.innerHTML = iconUrl3;

                    //day 4
                    var tempData4 = data['daily']['4']['temp']['max'];
                    var windData4 = data['daily']['4']['wind_speed'];
                    var humData4 = data['daily']['4']['humidity'];
                    var icon4 = data['daily']['4']['weather']['0']['icon'];
                    var iconUrl4 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon4 + "@2x.png' />"

                    tempEl4.innerHTML = tempData4;
                    windEl4.innerHTML = windData4;
                    humEl4.innerHTML = humData4;
                    iconEl4.innerHTML = iconUrl4;

                    //day 5
                    var tempData5 = data['daily']['5']['temp']['max'];
                    var windData5 = data['daily']['5']['wind_speed'];
                    var humData5 = data['daily']['5']['humidity'];
                    var icon5 = data['daily']['5']['weather']['0']['icon'];
                    var iconUrl5 = "<img class='weather-icon'  src= 'https://openweathermap.org/img/wn/" + icon5 + "@2x.png' />"

                    tempEl5.innerHTML = tempData5;
                    windEl5.innerHTML = windData5;
                    humEl5.innerHTML = humData5;
                    iconEl5.innerHTML = iconUrl5;
                })
                
                
            })

    }}, "#submit")

});
