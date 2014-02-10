console.log('El Edwin');

function Collection (models) {
  this.models = models || [];
 
  this.find = function(id) {
    var result;
 
    if (typeof(id) != 'string') {
      throw new Error("Oh Dang!");
    }
 
    this.models.forEach(function(value, index){
      if (value.id == id) {
        result = value;
      }
    });
 
    if (result) {
      return result;
    }
  };
  
  this.add = function(toBeAdded) {
    
    this.models.push(toBeAdded);  

    if(_.isEmpty(toBeAdded)) {
      throw new Error("Dingus!, Empty Arguments aren't valid here");
    }  
    if(!toBeAdded.hasOwnProperty('id')) {
      throw new Error('Dingus!, You need an ID');
    }

  };

  this.remove = function(toRemove) {

    // this.models = _.reject(this.models, function());
  }

};

