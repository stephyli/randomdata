var PhraseGenerator = function(){};
PhraseGenerator.prototype = {
	wordLists: {},
	generateList: function(rowTemplate, numLines)
	{
		var output = "";
		for(var i = 0; i < numLines; i++)
		{
			var row = rowTemplate;
			row = row.replace("{male}", this.getRandomWord( "male" ));
			row = row.replace("{female}", this.getRandomWord( "female" ));
			row = row.replace("{middle}", this.getRandomWord( "middle" ));
			row = row.replace("{last}", this.getRandomWord( "last" ));
			output += row;
		}
		return output;
	},
	getRandomWord: function(listIndex)
	{
		var list = this.wordLists[ listIndex ];
		return list[ Math.floor( Math.random() * list.length ) ];
	}
}

var gen = new PhraseGenerator();

$.get("data/male.txt", function(data)
{
	gen.wordLists.male = data.split("\n");
});

$.get("data/female.txt", function(data)
{
	gen.wordLists.female = data.split("\n");
});

$.get("data/last.txt", function(data)
{
	gen.wordLists.last = data.split("\n");
});

gen.wordLists.middle = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function generateList()
{
	var maleNameCount = $("#maleNameCount").val();
	var femaleNameCount = $("#femaleNameCount").val();
	var formatType = $("#formatType").val();
	var finalOutput = "";
	
	if(formatType == "table")
	{
		finalOutput += "<table>";
		finalOutput += gen.generateList("<tr><td>{male}</td><td>{middle}.</td><td>{last}</td></tr>", maleNameCount);
		finalOutput += gen.generateList("<tr><td>{female}</td><td>{middle}.</td><td>{last}</td></tr>", femaleNameCount);
		finalOutput += "</table>";
	}
	else if(formatType = "tab")
	{
		finalOutput += "<pre>";
		finalOutput += gen.generateList("{male}\t{middle}.\t{last}\n", maleNameCount);
		finalOutput += gen.generateList("{female}\t{middle}.\t{last}\n", femaleNameCount);
		finalOutput += "</pre>";
	}
	
	$("#output").html( finalOutput );
}
