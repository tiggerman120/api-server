'use strict';

const express = require('express');

const Clothes = require('../models/clothes');
const clothes = new Clothes;

const clothesRouter = express.Router();

clothesRouter.get('/clothes', getClothes);
clothesRouter.get('/clothes/:id', getOneClothes);
clothesRouter.post('/clothes', createClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);

function getClothes(req, res) {
  const allClothes = clothes.get();
  res.status(200).json(allClothes);
}

function getOneClothes(req, res) {
  const id = req.params.id;
  const oneClothes = clothes.get(id);
  res.status(200).json(oneClothes);
}

function createClothes(req, res) {
  const obj = req.body;
  const newClothes = clothes.create(obj);
  res.status(200).json(newClothes);
}

function updateClothes(req, res) {
  const updateOneClothes = req.params.id;
  clothes.update(req.params.id, req.body);
  res.status(200).json(updateOneClothes);
  
}

function deleteClothes(req, res) {
  clothes.delete(req.params.id);

  res.status(200).json('deleted');
}
module.exports = clothesRouter;