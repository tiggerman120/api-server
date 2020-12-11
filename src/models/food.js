'use strict';
const mongoose = require('mongoose');

class Foods {
  constructor(name) {
    this.id = 0;
    this.name = name;
    this.db = [];
  }

  // [{id: x, ...record}]
  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    obj.id = ++this.id;
    this.db.push(obj);
  }

  update(id, obj) {




    // this.db = this.db.map(record => {
    //   if(record.id !== id ) return;
    //   obj.keys.forEach(key => {
    //     record[key] = obj[key];
    //   })
    //   return record
    // })
    // const dbObj = this.db.find(record => record.id === parseInt(id));
    // dbObj = {...dbObj, ...obj}
    // return dbObj

    // return this.db.find(record => record.id === id)
    


    if (!id || id > this.db.length) { return null; } else {
      obj.id = id;
      this.db[id - 1].name = obj.name;

      return obj;
    }
  }
  delete(id) {
    if (!id) { return null; }
    console.log(this.db);
    this.db = this.db.filter(function removeDBItems(record) {
      return parseInt(record.id) !== parseInt(id);
      
    });
    return null;
  }

}

const banana = new Foods({
  id: 'banana',
  name: 'banana2',
});


// 1. make a schema
const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  calories: {type: Number, required: true},
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTEIN', 'CARB', 'SWEEET']},
});

// 2. export this schema as a model
const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;
