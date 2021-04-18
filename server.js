//Install express server
const express = require('express');
const path = require('path');

const app = express();
const appName = 'push-demo'

// Serve only the static files form the dist directory
app.use(express.static(__dirname + `/dist/${appName}`));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname + `/dist/${appName}/index.html`));
  next();
});

app.get('/api/key', (req, res, next) => {
  res.send({key:process.env.firebase_auth})
  next();
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
