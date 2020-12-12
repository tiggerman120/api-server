'use strict';

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');
const FoodCollection = require('./models/food-collection-class');

const food = new FoodCollection();

const MONGOOSE_URI = 'mongodb://localhost:27017/food';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(process.env.MONGOOSE_URI, options);

const doDataStuff = async() => {
  let carrot = {
    name: 'Carrot',
    calories: 25,
    type: 'VEGETABLE',
  };

  // save into the collection
  let newFood = await food.create(carrot);
  console.log('Food Created', newFood);

  // get one food
  let oneFood = await food.get(food._id);
  console.log('One Food', oneFood);

  // get all things from a collection
  let allFood = await food.get();
  console.log('All Food', allFood);

  // discounnect from Mongo
  mongoose.disconnect();
};
server.start(process.env.PORT);
doDataStuff();