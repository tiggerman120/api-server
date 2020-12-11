'use strict';
class Clothes {
  constructor(name, prop) {
    this.id = 0;
    this.name = name;
    this.prop = prop;
    this.db = [];
    //[{id: name, prop = record}]
  }

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

const banana = new Clothes({
  id: 'banana',
  name: 'banana2',
});

new Clothes(banana);
module.exports = Clothes;