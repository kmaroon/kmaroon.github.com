$(function() { 
 
 var i = 0;
  while(i < data.length) {
    var bostonCrimes = data[i];

    // What ever I do each time
    var neighborhood = bostonCrimes.name;
   	var incidents = bostonCrimes.incidents;
   	var domestic = bostonCrimes.domestic;


    var maxIncidents = 15000;
    var maxWidth = 500;
    
    // Fraction between 0-1
    var fraction = incidents / maxIncidents * maxWidth;



    var row = $("<div>").addClass("row");

    var neighborhoodDiv = $("<div>").addClass("neighborhood").text(neighborhood)
                   .appendTo(row);

    var incidentsDiv = $("<div>").addClass("incidents")
                    .css({ width: incidentsWidth})
                    .appendTo(row);

/*    var div = $("<div>").text(name + " " + salary)
                        .css({ width: salaryWidth,
                               backgroundColor: "blue" });
                               */  
    $("body").append(row);

    i = i + 1;
  }

});