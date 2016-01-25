

function displayNum()
{    var sizeOfNumbers=document.getElementById("sizeOfNumbers").value;
     var minVal=document.getElementById("minVal").value;
     var maxVal=document.getElementById("maxVal").value;

var arrayNumbers = randomNumber(sizeOfNumbers,{min:minVal, max:maxVal});


	document.getElementById("arrayNumbers").innerHTML=arrayNumbers;
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
