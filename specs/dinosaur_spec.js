var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){
  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('type1');
  });

  it('should have a type', function(){
    assert.equal('type1', dinosaur.type);
  });

}) ;