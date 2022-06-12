//AS A traveler
//I WANT to see the weather outlook for multiple cities
//SO THAT I can plan a trip accordingly

//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
    //Search function.
    //Button that will take text value from input field and retrieve weather data of that city
    //If text is invalid/not a city, user will be alerted to enter a valid city.
    //Most recent search should be saved in text area, but colour of text should be grey. 
    //Function that fills in the gaps of the url in the requestUrl variable ( https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} ) https://api.openweathermap.org/data/2.5/onecall?lat=" + textLat + "&lon=" + textLon "&exclude=" + textPart + "&appid={API key}"

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

//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city.
    //Each time a valid search is made, the text content will be made into the text content of a button and appended to recent-cities ul.
    //Generates buttons with click events.
    //Function for each button will use text content to fetch data of that city.