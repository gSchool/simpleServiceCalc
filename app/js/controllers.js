trig.controller("TrigController", function($scope, CalculatorFactory){
  $scope.calculate = function(){
    var sideB = $scope.sideB;
    var sideA = $scope.sideA;

    $scope.hypotenuse = CalculatorFactory.add(sideA, sideB)

}

});
