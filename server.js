const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.static('public'))

const API_KEY = '9840062fcd7aa695142761c413cf9a88'
const DARKSKY_URL = 'https://api.darksky.net/forecast/' + API_KEY

app.get('/', function(req, res) {
  res.send('index.html')
})

app.get('/weather/:lat/:lng', function(req, res) {
  console.log('Getting Weather!', req.params)

  const endpoint = `${DARKSKY_URL}/${req.params.lat},${req.params.lng}`

  console.log('ENDPOINT', endpoint)

  axios.get(endpoint)
    .then(function(response) {
      res.send(response.data)
    })
})

app.listen(process.env.PORT, () => {
    console.log(`The magic is going down at ${process.env.PORT}`)
})
