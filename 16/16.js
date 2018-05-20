
// var x = document.querySelector('#first-number').value;
// var y = document.querySelector('#second-number').value;
var x = document.getElementById('first-number');
var y = document.getElementById('second-number');
var add = document.getElementById('add-btn');
var minus = document.getElementById('minus-btn');
var times = document.getElementById('times-btn');
var divede = document.getElementById('divide-btn');

 add.onclick = function () {
   var xx = Number(x.value);
   var yy = Number(y.value);

  var k = xx + yy
  document.getElementById("result").innerHTML =k
}
 minus.onclick = function(){
   var xx = Number(x.value);
   var yy = Number(y.value);
    var k = xx - yy
    document.getElementById("result").innerHTML =k
}
 times.onclick = function(){
   var xx = Number(x.value);
   var yy = Number(y.value);
    var k = xx * yy
    document.getElementById("result").innerHTML =k
  }
 divede.onclick = function(){
   var xx = Number(x.value);
   var yy = Number(y.value);
    var k = xx / yy
    document.getElementById("result").innerHTML =k
}
