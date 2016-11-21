var app = angular.module("wordModule", []);

app.controller("wordGeneratorController", function($scope){
  $scope.wordDisplay = [];

  $scope.fancyWordDisplay = [];

  $scope.randWord = ["memo ", "budget ", "manager ", "co-worker ", "project ", "overtime ", "utilization ", "implementation "];

  $scope.randPhrase = ["promoting synergy ", "send some faxes ", "human resources "];

  $scope.cssClass = ["blue", "big"];



  $scope.wordclick = function(){
    $scope.wordDisplay.push($scope.randWord[Math.floor(Math.random() * 8)]);
    console.log($scope.wordDisplay);
  };

  $scope.phraseclick = function(){
    $scope.wordDisplay.push($scope.randPhrase[Math.floor(Math.random() * 3)]);
  };


  $scope.fancywordclick = function(){
    $scope.fancyWordDisplay.push({
      text: $scope.randWord[Math.floor(Math.random()*8)],  cssClass: "blue"
    });

    console.log($scope.fancyWordDisplay);
  };


  $scope.fancywordclick = function(generateWord){
    $scope.fancyWordDisplay.push($scope.randWord[Math.floor(Math.random() * 8)]);
    console.log($scope.fancyWordDisplay);
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
