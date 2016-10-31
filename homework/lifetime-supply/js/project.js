
// store button as variable
document.getElementById('click-me').onclick = calcButton;

// why wouldn't the following work
  // var calcButton = document.getElementById('clickme')
  // calcButton.onclick = function () {/actions/}

// Calculate how much you would eat for the rest of life

 function calcButton () {
  // Store and parse current age as var
  var currentAge = document.getElementById('age').value;

  // Store ad parse max age as var
  var maxAge = document.getElementById('max-age').value;

  // Store favourite drink as var
  var drinkType = document.getElementById('item').value;

  // Store drink amount per day as var
  var drinkAmount = document.getElementById('num-per-day').value;

  // parseInt values
  currentAge = parseInt(currentAge);
  maxAge = parseInt(maxAge);
  drinkAmount = parseInt(drinkAmount);


  // calculate how many drinks for rest of life and output to statement
  var totalDrinks = (maxAge - currentAge) * drinkAmount * 365;
  document.getElementById('solution').innerHTML = totalDrinks;
  // output drink type to statement
  document.getElementById('drink').innerHTML = drinkType;

}


