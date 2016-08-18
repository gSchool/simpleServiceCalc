trig.controller("TrigController", function($scope, CalculatorFactory){

  $scope.calculate = function(){
    $scope.hypotenuse =  CalculatorFactory.calcTri($scope.sideA, $scope.sideB)
  }

});
