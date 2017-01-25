var express = require('express');
var app = express();

app.enable('trust proxy');

app.get('/', (req, res) => {
  let ip = req.ip;
  let language = req.acceptsLanguages()[0];
  let software = req.headers['user-agent'];

  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }

  let ret = {
    'ipaddress': ip,
    'language': language,
    'software': software
  };

  res.json(ret);
});

app.listen(5000, () => console.log('app listening on port 5000!'));