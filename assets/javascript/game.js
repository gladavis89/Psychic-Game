var text = "";
var possible = "abcdefghijklmnopqrstuvwxyz";
var gsf = [];
var gl = 9;
var wins = 0;
var losses = 0;
var input = "";

document.onkeydown = function(event) {
  var input = event.key;

  var text = possible.charAt(Math.floor(Math.random() * possible.length));

  gsf.push(" " + input);
  document.getElementById("gl").innerHTML = gl--;
  document.getElementById("gsf").innerHTML = gsf;
  
  if (gl == -1) {
    losses++;
    gl = 9;
    gsf = [];
    alert("you fail!");
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("gl").textContent = 9;
    document.getElementById("gsf").innerHTML = gsf;
  }
  
  if (text == input) {
    wins++;
    gl = 9;
    alert("great jorb homestar!");
    gsf = [];
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("gl").textContent = 9;
    document.getElementById("gsf").innerHTML = gsf;
  }
};
