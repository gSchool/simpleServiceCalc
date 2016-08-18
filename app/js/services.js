trig.factory("CalculatorFactory", function(){
  return {
    calcTri: function(a, b){
    var aSq= Math.pow(a, 2)
    var bSq= Math.pow(b, 2)
    var cSq= (aSq + bSq)
    return Math.pow(cSq, 2)
    }
  }
});
