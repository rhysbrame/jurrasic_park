var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Enclosure = require('../enclosure.js');

describe('Enclosure', function(){
  var enclosure;

  beforeEach(function(){
    enclosure = new Enclosure();
  });

  it('should have an empty park at the start', function(){
    assert.equal( 0, enclosure.enclosureArray.length);
  });

  it('should have 1 dinosaur in the array', function(){
    enclosure.addDinosaur(new Dinosaur('type1', 3));
    assert.equal(1,enclosure.enclosureArray.length);
  });

  it('should be able to add many dinosaurs', function(){
    assert.equal( 0, enclosure.enclosureArray.length);
    enclosure.addDinosaur(new Dinosaur('type1', 3));
    enclosure.addDinosaur(new Dinosaur('type2', 12));
    enclosure.addDinosaur(new Dinosaur('type3', 5));
    enclosure.addDinosaur(new Dinosaur('type4', 0));
    enclosure.addDinosaur(new Dinosaur('type5', 1));
    assert.equal(5,enclosure.enclosureArray.length);
  });

  it('should be able to remove a Dinosaur', function(){
    assert.equal( 0, enclosure.enclosureArray.length);
    enclosure.addDinosaur(new Dinosaur('type1', 3));
    enclosure.addDinosaur(new Dinosaur('type2', 12));
    enclosure.addDinosaur(new Dinosaur('type3', 5));
    enclosure.addDinosaur(new Dinosaur('type4', 0));
    enclosure.addDinosaur(new Dinosaur('type5', 1));
    enclosure.removeDinosaur('type3');
    assert.equal(4,enclosure.enclosureArray.length);
  });

  it('should get all the dinos with more than 2 offspring', function(){
    assert.equal( 0, enclosure.enclosureArray.length);
    enclosure.addDinosaur(new Dinosaur('type1', 3));
    enclosure.addDinosaur(new Dinosaur('type2', 12));
    enclosure.addDinosaur(new Dinosaur('type3', 5));
    enclosure.addDinosaur(new Dinosaur('type4', 0));
    enclosure.addDinosaur(new Dinosaur('type5', 1));
    assert.equal(5,enclosure.enclosureArray.length);
    result = enclosure.getFertileDinosaurs();
    assert.equal(20, result);
  });
});












