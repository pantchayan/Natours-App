// START SERVER  =====================================================================
const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log('Hey server is now running');
});
