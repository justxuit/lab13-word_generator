var app = angular.module("wordModule", []);

app.controller("wordGeneratorController", function($scope){
  $scope.wordDisplay = [];

  $scope.wordBank = ["memo ", "budget ", "manager ", "co-worker ", "project ", "overtime ", "utilization ", "implementation "];

  $scope.phraseBank = ["promoting synergy ", "send some faxes ", "human resources "];

  $scope.styleBank = ["blue", "big", "bold"];

  $scope.wordclick = function(){
    $scope.randWord = $scope.wordBank[Math.floor(Math.random()*$scope.wordBank.length)];

    $scope.wordDisplay.push({
      text: $scope.randWord,
      class: "none"
    });
  };

  $scope.phraseclick = function(){
    $scope.randPhrase = $scope.phraseBank[Math.floor(Math.random()*$scope.phraseBank.length)];

    $scope.wordDisplay.push({
      text: $scope.randPhrase,
      class: "none"
    });
  };

  $scope.fancywordclick = function(){
    $scope.randWord = $scope.wordBank[Math.floor(Math.random()*$scope.wordBank.length)];
    $scope.randStyle = $scope.styleBank[Math.floor(Math.random()*$scope.styleBank.length)];

    $scope.wordDisplay.push({
      text: $scope.randWord,
      class: $scope.randStyle
    });

    console.log($scope.wordDisplay);
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
