var APIKey = "67990312b903cf578e099efc23a6844f"

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Puyallup, WA, USA&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {

    console.log(queryURL);

    console.log(response);

    $(".city").html("<h1>" + response.name + "Weather Details by Peter the Great</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").html("Humidity: " + response.main.humidity);
})