// const express is a function
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  const newTour = req.body;
  const newId = tours[tours.length - 1].id + 1;

  const newObject = Object.assign({ id: newId }, newTour);

  tours.push(newObject);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          newObject,
        },
      });
    }
  );
});

const port = 3000;

app.listen(port, () => {
  console.log('Hey server is now running');
});
