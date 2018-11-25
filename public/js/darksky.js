// Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '0.0.0.0';
// // Listen on a specific port via the PORT environment variable
// var port = process.env.PORT || 8080;
//
// var cors_proxy = require('cors-anywhere');
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });



$.ajax({
        url: 'https://api.darksky.net/forecast/9840062fcd7aa695142761c413cf9a88/37.8267,-122.4233',
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {

            console.log(parsedResponse);
              //document.querySelector("#day-snow").innerHTML = parsedResponse.currently.temperature

              // Above tag is not mapped correctly to frontend HTML value

            // document.querySelector("#weather").innerHTML = parsedResponse[0].WeatherText
        },
        error: function (error) {

            console.log(error);
        }
    });
