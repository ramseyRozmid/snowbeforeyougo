const express = require('express')
const axios = require('axios')
const MongoClient = require('mongodb').MongoClient;

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

console.dir(req.ip)

const uri = "mongodb+srv://ramsey_rozmid:2KRSL6qQlCjG}Kkl@snowdb-83p6l.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
