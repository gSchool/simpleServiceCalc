trig.factory("CalculatorFactory", function(){
return {
  add: function(sideA, sideB){
     var hypot = Math.hypot(Number(sideA)+Number(sideB))
     return hypot
  }
}
})
