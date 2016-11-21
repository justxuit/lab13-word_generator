var app = angular.module("wordModule", []);

app.controller("wordGeneratorController", function($scope){
  $scope.wordDisplay = [];

  var wordBank = ["memo ", "budget ", "manager ", "co-worker ", "project ", "overtime ", "utilization ", "implementation "];

  var phraseBank = ["promoting synergy ", "send some faxes ", "human resources "];

  var styleBank = ["blue", "big", "bold"];


  $scope.wordclick = function(){
    var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];

    $scope.wordDisplay.push({
      text: randWord,
      class: "none"
    });
  };

  $scope.phraseclick = function(){
    var randPhrase = phraseBank[Math.floor(Math.random()*phraseBank.length)];

    $scope.wordDisplay.push({
      text: randPhrase,
      class: "none"
    });
  };

  $scope.fancywordclick = function(){
    var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    var randStyle = styleBank[Math.floor(Math.random()*styleBank.length)];

    $scope.wordDisplay.push({
      text: randWord,
      class: randStyle
    });
  };

  $scope.fancyphraseclick = function(){
    randPhrase = phraseBank[Math.floor(Math.random()*phraseBank.length)];
    randStyle = styleBank[Math.floor(Math.random()*styleBank.length)];

    $scope.wordDisplay.push({
      text: randPhrase,
      class: randStyle
    });
  };

});


// app.controller("todoController", function($scope){
//   $scope.chores = ["feed doggo", "wash doggo", "brush doggo"];
//
//   $scope.onclick = function(choreToAdd){
//     $scope.chores.push(choreToAdd);
//     $scope.choreToAdd = "";
//   };
//
//   $scope.removeChore = function(chore){
//     var index = $scope.chores.indexOf(chore);
//     $scope.chores.splice(index, 1);
//   };
// });
