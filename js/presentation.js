$('#bakery .make').on('click', function (e) {
  var goodType = $(e.currentTarget).data('good-type');
  bakery.make(goodType);
});

bakery.updateIngredientsList();