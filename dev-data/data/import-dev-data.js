/* eslint-disable no-console */
// START SERVER  =====================================================================
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');

const Tour = require('../../models/tourModel');

dotenv.config({ path: `${__dirname}/../../config.env` });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILES
const tour = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA TO MONGO DATABASE
const importData = async () => {
  try {
    await Tour.create(tour);
    console.log('Data successfully loaded!');
    
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if(process.argv[2]==='--import'){
    importData();
}
else if(process.argv[2]==='--delete'){
    deleteData();
}


console.log(process.argv);
