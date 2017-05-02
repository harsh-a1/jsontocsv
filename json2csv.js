

fs = require('fs')
fs.readFile('/home/harsh/Documents/ou import idsp/blocksJson.geojson', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    var jsonData = JSON.parse(data);
    
    var stream = fs.createWriteStream("/home/harsh/Documents/ou import idsp/blocks.txt");
    stream.once('open', function(fd) {

        for (var i=0; i< jsonData.features.length;i++){

            var block = jsonData.features[i].properties.BLOCK;
            var district = jsonData.features[i].properties.DISTRICT;
            var state = jsonData.features[i].properties.STATE;

            var type = jsonData.features[i].geometry.type;
            var coordinates = jsonData.features[i].geometry.coordinates;
            coordinates = JSON.stringify(coordinates);
            // var code = jsonData.features[i].properties.name;
            
            stream.write(state + ";"+district+";"+block + ";" + type + ";" + coordinates + "\n");
            //  console.log("hi")
        }
        
        stream.end();
    });


    debugger
    //console.log(data);
});