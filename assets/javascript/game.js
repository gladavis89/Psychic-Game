var text = "";
var possible = "abcdefghijklmnopqrstuvwxyz";
var gsf = [];
var gl = 8;
var wins = 0;
var losses = 0;
var input = "";

document.onkeydown = function(event) {
  var input = event.key;

  for (var i = 0; i < 1; i++) {
    var text = possible.charAt(Math.floor(Math.random() * possible.length));

    gsf.push(" " + input);
    document.getElementById("gl").innerHTML = gl--;
    document.getElementById("gsf").innerHTML = gsf;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("wins").innerHTML = wins;
  }
  if (text == input) {
    wins = wins + 1;
    gl = 9;
    alert("great jorb homestar!");
    gsf = [];
  }
  if (gl === -1) {
    losses = losses + 1;
    gl = 9;
    gsf = [];
    alert("you fail!");
  }
};
