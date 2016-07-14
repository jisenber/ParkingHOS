var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
  // console.log(res);
});

app.use(express.static(__dirname + '/public/'));

app.listen(port, function() {
  console.log('Listening on PORT: ', port);
});

//
// app.get('*', function(request, response) {
//   console.log('New request:', request.url);
//   response.sendFile('index.html', {
//     root: '.'
//   });
// });
