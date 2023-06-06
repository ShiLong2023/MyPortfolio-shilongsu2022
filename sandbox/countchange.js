function countChange () {
  var quarters =parseInt(document.getElementById("quarters").value);
  var dimes = parseInt(document.getElementById("dimes").value);
  var pennies = parseInt(document.getElementById("pennies").value)
  var nickles = parseInt(document.getElementById("nickles").value)
  var sum = (quarters *.25) + (dimes *.10) + (pennies * 0.01) + (nickles * 0.05);
  
  document.getElementById("result").innerHTML = "$" + sum.toFixed(2);

}