var rolls = "";

function diceRoll() {

  rolls - "";
  var die = Math.round(Math.random()*5)+1;
  var image = "images/die" + die + ".jpg";
  document.getElementById("dieHolder").src=image;
  rolls = die;
  console.log(rolls);
  document.getElementById("rolls").innerHTML = rolls;
}