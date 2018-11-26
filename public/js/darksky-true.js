  // Killington
  $.ajax({
    url: '/weather/43.6045/-72.8201',
    success: function(response) {

      console.log(response.currently.temperature)
      $('#killington .current').html(response.currently.temperature.toFixed(0) +'°F')
    },
    error: function(error) {
      console.log(error)
    }
  })

  // Stratton
  $.ajax({
    url: '/weather/43.1134/-72.9081',
    success: function(response) {

      console.log(response.currently.temperature)
      $('#stratton .current').html(response.currently.temperature.toFixed(0) +'°F')
    },
    error: function(error) {
      console.log(error)
    }
  })

  // Sugarbush
  $.ajax({
    url: '/weather/43.3025/-74.6729',
    success: function(response) {

      console.log(response.currently.temperature)
      $('#sugarbush .current').html(response.currently.temperature.toFixed(0) +'°F')

    },
    error: function(error) {
      console.log(error)
    }
  })

  // Mammoth
  $.ajax({
    url: '/weather/37.6485/-118.9721',
    success: function(response) {

      console.log($('#mammoth-popup .mammoth-popup-temp').html())
      console.log(response.currently.temperature)
      $('#mammoth .current').html(response.currently.temperature.toFixed(0) +'°F')

      $('#mammoth_popup .mammoth-popup-summary').html(response.currently.summary)
      $('#mammoth_popup .mammoth-popup-hourly-summary').html(response.hourly.summary)
      $('#mammoth_popup .mammoth-popup-daily-summary').html(response.daily.summary)

      $('#mammoth_popup .mammoth-popup-temp').html(response.currently.temperature.toFixed(0) +' °F')
      $('#mammoth_popup .mammoth-popup-hourly-temp').html(response.hourly.data[0].temperature.toFixed(0) +' °F')

      $('#mammoth_popup .mammoth-popup-windSpeed').html(response.currently.windSpeed.toFixed(0) + ' mph')
      $('#mammoth_popup .mammoth-popup-hourly-windSpeed').html(response.hourly.data[0].windSpeed.toFixed(0) + ' mph')

      $('#mammoth_popup .mammoth-popup-windGust').html(response.currently.windGust.toFixed(0) + ' mph')
      $('#mammoth_popup .mammoth-popup-hourly-windGust').html(response.hourly.data[0].windGust.toFixed(0) + ' mph')

      $('#mammoth_popup .mammoth-popup-apparentTemperature').html(response.currently.apparentTemperature.toFixed(0) + ' °F')
      $('#mammoth_popup .mammoth-popup-hourly-apparentTemperature').html(response.hourly.data[0].apparentTemperature.toFixed(0) + ' °F')
      $('#mammoth_popup .mammoth-popup-daily-temperatureLow').html(response.daily.data[0].temperatureLow.toFixed(0) + ' °F')
      $('#mammoth_popup .mammoth-popup-daily-temperatureHigh').html(response.daily.data[0].temperatureHigh.toFixed(0) + ' °F')
      $('#mammoth_popup .mammoth-popup-daily-apparentTemperatureLow').html(response.daily.data[0].apparentTemperatureLow.toFixed(0) + ' °F')
      $('#mammoth_popup .mammoth-popup-daily-apparentTemperatureHigh').html(response.daily.data[0].apparentTemperatureHigh.toFixed(0) + ' °F')

      icons.add("mammoth-weather-icon", response.currently.icon)
      icons.add("mammoth-weather-hourly-icon", response.hourly.data[0].icon)
      icons.add("mammoth-weather-daily-icon", response.daily.data[0].icon)
    },
    error: function(error) {
      console.log(error)
    }
  })

  // Squaw
  $.ajax({
    url: '/weather/39.1970/-120.2357',
    success: function(response) {

      console.log($('#squaw-popup .squaw-popup-temp').html())
      console.log(response.currently.temperature)
      $('#squaw .current').html(response.currently.temperature.toFixed(0) +'°F')

      $('#squaw_popup .squaw-popup-summary').html(response.currently.summary)
      $('#squaw_popup .squaw-popup-hourly-summary').html(response.hourly.summary)
      $('#squaw_popup .squaw-popup-daily-summary').html(response.daily.summary)

      $('#squaw_popup .squaw-popup-temp').html(response.currently.temperature.toFixed(0) +' °F')
      $('#squaw_popup .squaw-popup-hourly-temp').html(response.hourly.data[0].temperature.toFixed(0) +' °F')

      $('#squaw_popup .squaw-popup-windSpeed').html(response.currently.windSpeed.toFixed(0) + ' mph')
      $('#squaw_popup .squaw-popup-hourly-windSpeed').html(response.hourly.data[0].windSpeed.toFixed(0) + ' mph')

      $('#squaw_popup .squaw-popup-windGust').html(response.currently.windGust.toFixed(0) + ' mph')
      $('#squaw_popup .squaw-popup-hourly-windGust').html(response.hourly.data[0].windGust.toFixed(0) + ' mph')

      $('#squaw_popup .squaw-popup-apparentTemperature').html(response.currently.apparentTemperature.toFixed(0) + ' °F')
      $('#squaw_popup .squaw-popup-hourly-apparentTemperature').html(response.hourly.data[0].apparentTemperature.toFixed(0) + ' °F')
      $('#squaw_popup .squaw-popup-daily-temperatureLow').html(response.daily.data[0].temperatureLow.toFixed(0) + ' °F')
      $('#squaw_popup .squaw-popup-daily-temperatureHigh').html(response.daily.data[0].temperatureHigh.toFixed(0) + ' °F')
      $('#squaw_popup .squaw-popup-daily-apparentTemperatureLow').html(response.daily.data[0].apparentTemperatureLow.toFixed(0) + ' °F')
      $('#squaw_popup .squaw-popup-daily-apparentTemperatureHigh').html(response.daily.data[0].apparentTemperatureHigh.toFixed(0) + ' °F')

      icons.add("squaw-weather-icon", response.currently.icon)
      icons.add("squaw-weather-hourly-icon", response.hourly.data[0].icon)
      icons.add("squaw-weather-daily-icon", response.daily.data[0].icon)
    },
    error: function(error) {
      console.log(error)
    }
  })

  // June
  $.ajax({
    url: '/weather/37.7513/-119.0726',
    success: function(response) {

      console.log($('#my-popup .june-popup-temp').html())
      console.log(response.currently.temperature)
      $('#june .current').html(response.currently.temperature.toFixed(0) +'°F')

      $('#my_popup .june-popup-summary').html(response.currently.summary)
      $('#my_popup .june-popup-hourly-summary').html(response.hourly.summary)
      $('#my_popup .june-popup-daily-summary').html(response.daily.summary)

      $('#my_popup .june-popup-temp').html(response.currently.temperature.toFixed(0) +' °F')
      $('#my_popup .june-popup-hourly-temp').html(response.hourly.data[0].temperature.toFixed(0) +' °F')

      $('#my_popup .june-popup-windSpeed').html(response.currently.windSpeed.toFixed(0) + ' mph')
      $('#my_popup .june-popup-hourly-windSpeed').html(response.hourly.data[0].windSpeed.toFixed(0) + ' mph')

      $('#my_popup .june-popup-windGust').html(response.currently.windGust.toFixed(0) + ' mph')
      $('#my_popup .june-popup-hourly-windGust').html(response.hourly.data[0].windGust.toFixed(0) + ' mph')

      $('#my_popup .june-popup-apparentTemperature').html(response.currently.apparentTemperature.toFixed(0) + ' °F')
      $('#my_popup .june-popup-hourly-apparentTemperature').html(response.hourly.data[0].apparentTemperature.toFixed(0) + ' °F')
      $('#my_popup .june-popup-daily-temperatureLow').html(response.daily.data[0].temperatureLow.toFixed(0) + ' °F')
      $('#my_popup .june-popup-daily-temperatureHigh').html(response.daily.data[0].temperatureHigh.toFixed(0) + ' °F')
      $('#my_popup .june-popup-daily-apparentTemperatureLow').html(response.daily.data[0].apparentTemperatureLow.toFixed(0) + ' °F')
      $('#my_popup .june-popup-daily-apparentTemperatureHigh').html(response.daily.data[0].apparentTemperatureHigh.toFixed(0) + ' °F')

      icons.add("june-weather-icon", response.currently.icon)
      icons.add("june-weather-hourly-icon", response.hourly.data[0].icon)
      icons.add("june-weather-daily-icon", response.daily.data[0].icon)

    },
    error: function(error) {
      console.log(error)
    }
  })

      $('#my_popup').popup();
      $('#squaw_popup').popup();
