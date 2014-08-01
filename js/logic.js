var bakery = {
  supplies: {
    flour: 4,
    eggs: 12,
    sugar: 17,
    spice: 5
  },
  goodRequirements: {
    cupcake: {
      flour: 2,
      eggs: 1,
      sugar: 1
    },
    cookie: {
      flour: 1,
      eggs: 2,
      sugar: 1,
      spice: 2
    }
  },
  ingredientCheck: function(recs) {
    console.log('Checking ingredient availability...')
    success = true;
    $.each(recs, function(k, v){
      if((v <= bakery.supplies[k]) && success){
        bakery.supplies[k] -= v;
      } else {
        success = false;
      }
    });
    return success;
  },
  make: function (goodType) {
    console.log('Attempting to make a:', goodType);
    var req = this.goodRequirements[goodType];
    // TODO: Only make if we have enough ingredients
    ingredients_available = bakery.ingredientCheck(req);
    if (ingredients_available) {
      // TODO: Reduce the bakery's supplies by the required amount
      this.updateIngredientsList();
      console.log('The bakery made a ' + goodType + '!');

      // TODO: Add class goodType class to div
      var goodDiv = $('<div class='+goodType+'>');
      $('#bakery .display').append(goodDiv);
    } else {
      console.log("You can't make that.")
    }
  },
  updateIngredientsList: function () {
    // TODO: Update rest of ingredients
    $.each(this.supplies, function(k, v){
      $('.ingredients .'+k+' span').text(v);
    });
  }
};

