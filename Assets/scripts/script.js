moment().format("L");
console.log(moment().format("L"));
var cities = [];
console.log(cities);
var city = "";

function getCityInfo(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=857c3a0a6b4e70819e79df943dea660d";
  var forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=857c3a0a6b4e70819e79df943dea660d";
  /////////////////////////CURRENT WEATHER///////////////////////////
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    console.log(queryURL);
    console.log(forecastURL);
    $("#current").empty();

    //Transfer Content to HTML
    var currentDate = moment().format("L");
    var cityEl = $("<h2>").text(response.name);
    var currentDateEl = cityEl.append("" + currentDate);
    var tempEl = $("<p>").text("Temp: " + response.main.temp);
    var humidityEl = $("<p>").text("Humidity: " + response.main.humidity);
    var windEl = $("<p>").text("Wind Speed: " + response.wind.speed);
    var currentWeather = response.weather[0].main;
    //if statements for currentWeather icon
    var newDiv = $("<div>");
    newDiv.append(currentDateEl, tempEl, humidityEl, windEl);
    $("#current").html(newDiv);

    //$(".city").html("<h1>" + response.name + "</h1>");
    //$(".temp").text("Temperature: " + response.main.temp + //" °F");
    //$(".wind").text("Wind Speed: " + response.wind.speed + //" MPH");
    //$(".humidity").text("Humidity: " + response.main.//humidity + " %");
    //Log Data in Console
    console.log("city: ", response.name);
    console.log("temp: ", response.main.temp);
    console.log("humidity: ", response.main.humidity);
    console.log("wind speed: ", response.wind.speed);
    console.log("conditions: ", response.weather[0].main);
    console.log("longitude: ", response.coord.lon);
    console.log("latitude: ", response.coord.lat);
  });
  ///////////////////////////UV INDEX////////////////////////////////

  var lat = response.coord.lat;
  var lon = response.coord.lon;
  var uvURL =
    "http://api.openweathermap.org/data/2.5/uvi?appid=857c3a0a6b4e70819e79df943dea660d" +
    "&lat=" +
    lat +
    "&lon=" +
    lon;

  $.ajax({
    url: uvURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#uv-index") = response.value;
    var uvEl = $("<p>").text("UV Index: " + response.value);
    $("uv-index").html(uvEl);
  });
  //////////////////////FIVE DAY FORECAST/////////////////////////////////////
  $.ajax({
    url: forecastURL,
    method: "GET",
  }).then(function (response) {
    // Log the queryURL
    console.log(response);
    // Log the resulting objects
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
}

//Capture form input: Add new city with button, get current and future forecasts. Establish form input first.

//Change City input by adding variable

//Display capture the specific data onto the screen: city name, data

//You will need separate ajax calls for 5 day forecast and the current forecast and UV Index (three ajax). But how are these going to be laid out. List them all at the top and then run the AJAX calls or run them in order.

//New cities are added to list when searched and will be displayed in search history.

//Run AJAX call to the OpenWeatherMap API
//Search Button On click Function

// Function for displaying city data
function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < cities.length; i++) {
    var a = $("<button>");
    a.addClass("city-btn btn btn-primary btn-lg btn-block");
    a.attr("data-name", cities[i]);
    a.text(cities[i]);
    $("buttons-view").append(a);
  }
}

//Search Button On click Function
$("#add-city").on("click", function (event) {
  event.preventDefault();
  var city = $("input").val();
  cities.push(city);
  console.log($("input").val());
  console.log(event);
  renderButtons();
});

$(document).on("click", ".city-btn", getCityInfo);
renderButtons();

//var city = $(this).attr("data-name");

//console.log("test");
//moment().format("L");
//console.log(moment().format("L"));
//var cities = [];
//console.log(cities);
//var location = "";
//console.log(location);
