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
  money: 2000,
  groceryCosts: {
    flour: 4,
    eggs: 2,
    sugar: 2,
    spice: 5
  }
};
var ingredientCheck = function(recs) {
  success = true;
  $.each(recs, function(k, v){
    if((v <= bakery.supplies[k]) && success){
      bakery.supplies[k] -= v;
    } else {
      success = false;
    }
  });
  return success;
};
var make = function (goodType) {
  var req = bakery.goodRequirements[goodType];
  // TODO: Only make if we have enough ingredients
  ingredients_available = ingredientCheck(req);
  if (ingredients_available) {
    // TODO: Reduce the bakery's supplies by the required amount
    updateIngredientsList();
    console.log('The bakery made a ' + goodType + '!');

    // TODO: Add class goodType class to div
    var goodDiv = $('<div class='+goodType+'>');
    $('#bakery .display').append(goodDiv);
  };
};
var updateIngredientsList = function () {
  // TODO: Update rest of ingredients
  $.each(bakery.supplies, function(k, v){
    $('.ingredients .'+k+' span').text(v);
  });
};
var buyIngredients = function(ingredients){
  var cost = 0;
  $.each(ingredients, function(k,v){
    cost += (bakery.groceryCosts[k] * v)
  });
  if (cost <= bakery.money){
    bakery.money -= cost;
    $.each(ingredients, function(k,v){
      if (v > 0){
        bakery.supplies[k] += parseInt(v);
      }
    });
    updateIngredientsList();
    updateBudget();
  } else {
    console.log('Not enough money.')
  }
};
var updateBudget = function(){
  $('#money').text(bakery.money);
};


