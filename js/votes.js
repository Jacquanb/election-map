var createPolitician = function(name, partyColor)
{
var politician = {};

  politician.partyColor = partyColor;
  politician.name = name;

  politician.electionResults = null;

  politician.totalVotes = 0;


  politician.tallyUpTotalVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];

    }
 };
  return politician;
};


var linda = createPolitician("Linda Marks", [245, 141, 136]);

var megan = createPolitician("Megan Cruz", [132, 17, 11]);

console.log(linda.name)
console.log(megan.name)

console.log("Linda's color is: " + linda.partyColor);
console.log("Megan's color is: " + megan.partyColor);

linda.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6,
2, 14, 0, 1,6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

megan.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15,
 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

linda.electionResults[9] = 1;
megan.electionResults[9] = 28;

linda.electionResults[4] = 17;
megan.electionResults[4] = 38;

linda.electionResults[43] = 11;
megan.electionResults[43] = 27;

var setStateResults = function (state) {
    theStates[state].winner = null;
    if (linda.electionResults[state] > megan.electionResults[state]){
      theStates[state].winner = linda;
    }else if (linda.electionResults[state] < megan.electionResults[state]){
      theStates[state].winner = megan;
    }

    var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
  theStates[state].rgbColor = [11,32,57];
   }

  var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = megan.name;
candidate2Name.innerText = linda.name;

candidate1Results.innerText = megan.electionResults[state];
candidate2Results.innerText = linda.electionResults[state];

if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
  }


console.log(linda.electionResults)
console.log(megan.electionResults)
linda.tallyUpTotalVotes();
megan.tallyUpTotalVotes();
console.log(linda.totalVotes);
console.log(megan.totalVotes);

 var winner = "???";

    if (linda.totalVotes > megan.totalVotes){
      winner = linda.name;
    }else if (linda.totalVotes < megan.totalVotes){
      winner = megan.name;
    }else{
      winner = "Draw.";
    }
console.log("And the winner is " + winner + "!!!");

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = megan.name;
row.children[1].innerText = megan.totalVotes;
row.children[2].innerText = linda.name;
row.children[3].innerText = linda.totalVotes;
row.children[5].innerText = winner;
