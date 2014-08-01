$('#bakery .make').on('click', function (e) {
  var goodType = $(e.currentTarget).data('good-type');
  make(goodType);
});

updateIngredientsList();
updateBudget();

$('#supplies form').submit(function (e){
  e.preventDefault();
  var values = {};
  $.each($(this).serializeArray(), function(i, field) {
      values[field.name] = field.value;
  });
  console.log(values);
  buyIngredients(values);
});