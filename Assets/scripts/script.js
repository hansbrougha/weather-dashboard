console.log("test");
// This is our API key
var APIKey = "857c3a0a6b4e70819e79df943dea660d";

// Here we are building the URL we need to query the database
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Bujumbura,Burundi&units=imperial&appid=" +
  APIKey;

//Capture form input: Add new city with button, get current and future forecasts. Establish form input first.

//Change City input by adding variable

//Display capture the specific data onto the screen: city name, data

//You will need separate ajax calls for 5 day forecast and the current forecast and UV Index (three ajax). But how are these going to be laid out. List them all at the top and then run the AJAX calls or run them in order.

//Use Bujumbura activity!!!!!!!!!!

//And also NYTimes activity.

//New cities are added to list when searched and will be displayed in search history.

//Run AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET",
})
  // Store all retrieved data in response
  .then(function (response) {
    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    //Transfer Content to HTML
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".temp").text("Temperature (F) " + response.main.temp);
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);

    //Log Data in Console
    console.log(response.name);
    console.log(response.dt);
    console.log(response.main.temp);
    console.log(response.main.humidity);
    console.log(response.wind.speed);
    console.log(response.weather[0].main);
  });

//Search Button On click Function

$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  $("input").val();
  console.log($("input").val());
  //search through class activities, omdb app.
  console.log(event);
});
