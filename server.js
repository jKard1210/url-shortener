
var express = require('express')
var app = express()
var dig = 0;
var oUrl = [];



app.get ('/', function(req, res) {
  res.send("<h1>URL Shortener</h1> " + "<h4>Note: do not include HTTP:// in your original URL<h4>" + "https://pacific-reaches-72749.herokuapp.com/")
})

app.get('/:id', function (req, res) {
var id = req.params.id;
var num = dig;
oUrl[num] = id;
dig++;

  
  res.send("<h1> Original URL: </h1>" + id +
  "<h1>Shortened URL: </h1>" + "https://free-code-camp-kardatzke.c9users.io/url/" + num
  );
})

app.get('/url/:id', function(req, res) {
    var abc = oUrl[req.params.id];
    res.redirect("http://" + abc);
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})