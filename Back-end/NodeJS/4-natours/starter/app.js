// const express is a function
const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');



// Middlewares =====================================

app.use(morgan('dev'));
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);






// Route Handlers ===================================

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;

  if (id > tours.length - 1) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }

  const tar = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      tour: tar,
    },
  });
};

const postTour = (req, res) => {
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
};

const updateTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  if (id > tours.length - 1) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here .....>',
    },
  });
};

const deleteTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  if (id > tours.length - 1) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};


// Routes ====================================

app.route('/api/v1/tours').get(getAllTours).post(postTour);

app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

const port = 3000;

app.listen(port, () => {
  console.log('Hey server is now running');
});
