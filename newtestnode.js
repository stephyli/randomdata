function readFile(file, size, callback)
{
    var fs = require('fs');
    
    fs.readFile(file, 'utf8', function(err, contents) 
    {
        var arrayName = contents.split('\n');
        var newArray= [];
        for(var i=0; i<=size; i++)
        {
            var arrayIndex = Math.floor(Math.random() * arrayName.length) + 1;
            newArray.push(i+arrayName[arrayIndex]);
        }
        
        callback( newArray );
    });
}





var http = require('http');

var server = http.createServer(function(req, res)
{
    var maleNames = readFile('male.txt', 5, function(maleNames)
    {
        var femaleNames = readFile('female.txt', 5, function(femaleNames)
        {
            res.writeHeader(200, {"Content-Type": "text/html"});
            res.write( maleNames.join('<br>') );
            res.write( femaleNames.join('<br>') );
            res.end();
        });
    });
});
server.listen(8080);

