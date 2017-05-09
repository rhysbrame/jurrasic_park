var Enclosure = function(){
  
  this.enclosureArray = [];
  // this.fertileArray = []
  
  Enclosure.prototype = {
    addDinosaur: function(dinosaur){
      this.enclosureArray.push(dinosaur);
    },

    removeDinosaur: function(type){
      for (var dino of this.enclosureArray){
        if (dino.type === type){
          var index = this.enclosureArray.indexOf(dino);
          this.enclosureArray.splice(index,1);
        }
      }
    },

    getFertileDinosaurs: function(){
      var count = 0;

      for (dino of this.enclosureArray){
        if(dino.offspring > 2){
          count += dino.offspring;
        }
      }
      return count;
    }
  };
};

module.exports = Enclosure;