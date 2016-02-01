function displayTable(arr){
  var strTable = "<table>";
  for (var i=0; i<arr.length;i++){
    strTable = strTable + "<tr>";
//for (var j= 1; j <=2; j++) {
strTable = strTable + "<td>" + (arr[i])+ "</td>";
//}

strTable = strTable + "</tr>";
}
strTable =strTable + "</table>"
return strTable;
}

function displayNum()
{    var sizeOfNumbers=document.getElementById("sizeOfNumbers").value;
     var minVal=document.getElementById("minVal").value;
     var maxVal=document.getElementById("maxVal").value;

var arrayNumbers = randomNumber(sizeOfNumbers,{min:minVal, max:maxVal});
document.getElementById("tableResults").innerHTML=displayTable(arrayNumbers);
}


function randomNumber(numSize,minOrMax) {


    var arrayOfNumbers=[];
    for (var i=0;i<numSize;i++){
    //is it defined?
      if (minOrMax.min===undefined){
         minOrMax.min=0;
      }
      if (minOrMax.max===undefined){
         minOrMax.max=0;
      }
      //can it be converted to a number?

      if (isNaN(parseInt(minOrMax.max))){
         throw"please input an integer as max";
      }
      if (isNaN(parseInt(minOrMax.min))){
         throw"please input an integer as min";
      }


      //converting string into number


      minOrMax.min = parseInt(minOrMax.min);
      minOrMax.max = parseInt(minOrMax.max);

      //making sure max is the bigger number
      if (minOrMax.max<minOrMax.min){
         var reverse=minOrMax.max;
         minOrMax.max=minOrMax.min;
         minOrMax.min=reverse;
      }
      var number = Math.floor(minOrMax.min+Math.random()*(minOrMax.max-minOrMax.min+1));
      arrayOfNumbers.push(number);

   }

    return arrayOfNumbers;
}

function displayTable(arr){
  var strTable = "<table>";
  for (var i=0; i<arr.length;i++){
    strTable = strTable + "<tr>";
//for (var j= 1; j <=2; j++) {
strTable = strTable + "<td>" + (arr[i])+ "</td>";
//}

strTable = strTable + "</tr>";
}
strTable =strTable + "</table>"
return strTable;
}

function displayInit(){
var sizeOfInit=document.getElementById("sizeOfInit").value;
var arrayInit=generateInitials(sizeOfInit);
document.getElementById("initResults").innerHTML=displayTable(arrayInit);
}
function generateInitials(nameSize){
  var initials =[];

  var alphaInitial ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i=0; i<nameSize; i++){
  var initArray = alphaInitial.charAt(Math.floor(Math.random()*alphaInitial.length))+".";
   initials.push(initArray);
  }
  return initials;

}

function openFile(){
    
  var fs = require('fs');
  var itemArray =[];
    
fs.readFile('./male.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        itemArray.push(array[i]);
        
    }

});
    document.getElementById("output").innerHTML=displayTable(itemArray);
}

