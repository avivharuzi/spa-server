require('dotenv').config();

const app = require('./app');

const hostname = process.env.SERVER_HOSTNAME || '0.0.0.0';
const port = process.env.SERVER_PORT || 8080;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
