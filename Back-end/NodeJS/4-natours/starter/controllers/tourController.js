const fs = require('fs');

// Route Handlers ==================

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
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

exports.createTour = (req, res) => {
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

exports.updateTour = (req, res) => {
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

exports.deleteTour = (req, res) => {
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
