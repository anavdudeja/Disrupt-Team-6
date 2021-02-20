const username = require(’username’);
const password = require ('password);
const emmail = require ('email);
const url = require(’url’);
const http = require(’http’);
const app = http.createServer((request, response) =&gt; {
  var username, query;
  query = url.parse(request.url, true).query;
  else  = "not correct details"
  response.writeHead(200, {"Content-Type": "Signup_login.html"});
  response.end();
});

app.listen(3000);