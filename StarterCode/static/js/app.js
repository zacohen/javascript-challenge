  
// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

var tbody = d3.select("tbody");

//ufo sightings for each column
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row = tbody.append("tr");

    //object.entries section
    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

//select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // input date 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    filteredData.forEach(function(selections) {
    console.log(selections);

    // get tr for each
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});