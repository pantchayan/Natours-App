// START SERVER  =====================================================================
const app = require('./app');

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Hey server is now running on http://127.0.0.1:3000');
});
