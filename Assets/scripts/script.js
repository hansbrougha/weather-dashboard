console.log("test");
// This is our API key
var APIKey = "857c3a0a6b4e70819e79df943dea660d";

// Here we are building the URL we need to query the database
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Kansas+City&units=imperial&appid=" +
  APIKey;

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
    console.log(response.coord.lon);
    console.log(response.coord.lat);
  });

var APIKey = "857c3a0a6b4e70819e79df943dea660d";
var queryURL =
  "https://api.openweathermap.org/data/2.5/forecast?" +
  "q=Kansas+City&appid=" +
  APIKey;

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  // Log the queryURL
  console.log(queryURL);
  // Log the resulting object
  console.log(response.list);
  console.log(response.list[5].dt_txt);
  console.log(response.list[5].weather[0].id);
  console.log(response.list[5].main.temp);
  console.log(response.list[5].main.humidity);
  console.log(response.list[13].dt_txt);
  console.log(response.list[13].weather[0].id);
  console.log(response.list[13].main.temp);
  console.log(response.list[13].main.humidity);
  console.log(response.list[21].dt_txt);
  console.log(response.list[21].weather[0].id);
  console.log(response.list[21].main.temp);
  console.log(response.list[21].main.humidity);
  console.log(response.list[29].dt_txt);
  console.log(response.list[29].weather[0].id);
  console.log(response.list[29].main.temp);
  console.log(response.list[29].main.humidity);
  console.log(response.list[37].dt_txt);
  console.log(response.list[37].weather[0].id);
  console.log(response.list[37].main.temp);
  console.log(response.list[37].main.humidity);
});

//UV Index Bad Request. Make sure You Do this last, after everything else work.
//var APIKey = "857c3a0a6b4e70819e79df943dea660d";
//var uvURL =
//  "http://api.openweathermap.org/data/2.5/uvi?appid=" +
//  APIKey +
//  "&lat={lat}&lon={lon}";
//
//$.ajax({
//  url: uvURL,
//  method: "GET",
//}).then(function (response) {
//  console.log(response);
//});

//Capture form input: Add new city with button, get current and future forecasts. Establish form input first.

//Change City input by adding variable

//Display capture the specific data onto the screen: city name, data

//You will need separate ajax calls for 5 day forecast and the current forecast and UV Index (three ajax). But how are these going to be laid out. List them all at the top and then run the AJAX calls or run them in order.

//Use Bujumbura activity!!!!!!!!!!

//And also NYTimes activity.

//New cities are added to list when searched and will be displayed in search history.

//Run AJAX call to the OpenWeatherMap API
//Search Button On click Function

$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  $("input").val();
  console.log($("input").val());
  //search through class activities, omdb app.
  console.log(event);
});
