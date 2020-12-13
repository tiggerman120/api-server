'use strict';

const express = require('express');

const Foods = require('../models/food-collection-class');
const foods = new Foods();

const foodRouter = express.Router();


async function getFoods(req, res) {
  console.log('in getFoods');
  res.status(200).json(await foods.get());
}

async function getOneFood(req, res) {
  const id = req.params.id;
  res.status(200).json(await foods.get(id));
}

async function createFood(req, res) {
  const obj = req.body;
  console.log(obj);
  res.status(200).json(await foods.create(obj));
  
  
}

async function updateFood(req, res) {
  const id = req.params.id;
  const obj = req.body;
  foods.update(req.params.id, req.body);
  res.status(200).json(await foods.update(id, obj));
}

async function deleteFood(req, res) {
  const id = req.params.id;
  
  res.status(200).json(await foods.delete(id));
}


foodRouter.get('/food', getFoods);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

module.exports = foodRouter;