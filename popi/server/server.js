const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "UserThree"]})
})

app.get("/album", (req, res) => {
    fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c2b279f1bbfca29d3c01815222dafcf9&artist=Cher&album=Believe&format=json')
        .then(response => response.json())
})
app.get('/check', (req, res) => {
    fetch('https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c2b279f1bbfca29d3c01815222dafcf9&artist=Cher&album=Believe&format=json/')
      // This takes the raw response from the fetch promise and parses it to json data format.
      .then(response => response.json())
      // And then takes THAT promise and does things with the json data.
      .then(data => {
        res.send(`
          <h1>New Deck ID: '${data.album.url}'</h>
        `);
      })
  });
app.listen(5000, () => {console.log("Server started on port 5000")})