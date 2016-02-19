// randomDataNumbers.html
function displayNum()
{    
     var sizeOfNumbers=$("#sizeOfNumbers").val();
     var minVal=$("#minVal").val();
     var maxVal=$("#maxVal").val();

var arrayNumbers = randomNumber(sizeOfNumbers,{min:minVal, max:maxVal});

$("#tableResults").html(displayTable(arrayNumbers));

}


function randomNumber(numSize,minOrMax) 
{
    var arrayOfNumbers=[];
    for (var i=0;i<numSize;i++)
    {
      //is it defined?

      if (minOrMax.min===undefined)
         {
            minOrMax.min=0;
         }
      if (minOrMax.max===undefined)
         {
            minOrMax.max=0;
         }
      //can it be converted to a number?

      if (isNaN(parseInt(minOrMax.max)))
         {
         throw"please input an integer as max";
         }
      if (isNaN(parseInt(minOrMax.min)))
         {
         throw"please input an integer as min";
         }

       //converting string into number

       minOrMax.min = parseInt(minOrMax.min);
       minOrMax.max = parseInt(minOrMax.max);

       //making sure max is the bigger number
       if (minOrMax.max<minOrMax.min)
        {
           var reverse=minOrMax.max;
           minOrMax.max=minOrMax.min;
           minOrMax.min=reverse;
        }
      var number = Math.floor(minOrMax.min+Math.random()*(minOrMax.max-minOrMax.min+1));
      arrayOfNumbers.push(number);

    }

    return arrayOfNumbers;
}

function displayTable(arr)
{
  var strTable = "<table>";
  for (var i=0; i<arr.length;i++)
  {
    strTable = strTable + "<tr>";
    //for (var j= 1; j <=2; j++)
    {
    strTable = strTable + "<td>" + (arr[i])+ "</td>";
    }

    strTable = strTable + "</tr>";
  }
strTable =strTable + "</table>"
return strTable;
}

// randomDataInitials.html

function displayInit()
{
   var sizeOfInit=$("#sizeOfInit").val();
   var arrayInit=generateInitials(sizeOfInit);
      $("#initResults").html(displayTable(arrayInit));
  }
     function generateInitials(nameSize)
     {
        var initials =[];
        var alphaInitial    ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i=0; i<nameSize; i++)
        {
           var initArray =      alphaInitial.charAt(Math.floor(Math.random()*alphaInitial.length))+".";
       initials.push(initArray);
        }
  return initials;

}

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmgcPLKsn2ZJGoVC7hIBZUIs4Bm5_sOKk&callback=initMap"async defer></script>

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}



