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

      console.log(response.currently.temperature)
      $('#mammoth .current').html(response.currently.temperature.toFixed(0) +'°F')

    },
    error: function(error) {
      console.log(error)
    }
  })

  // Squaw
  $.ajax({
    url: '/weather/39.1970/-120.2357',
    success: function(response) {

      console.log(response.currently.temperature)
      $('#squaw .current').html(response.currently.temperature.toFixed(0) +'°F')

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
      $('#my_popup .june-popup-temp').html(response.currently.temperature.toFixed(0) +' °F')

    },
    error: function(error) {
      console.log(error)
    }
  })

      $('#my_popup').popup();
      $('#squaw_popup').popup();
