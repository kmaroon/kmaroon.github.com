$(function() {
  	var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.TERRAIN // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);

  	
  	var i= 0;
	var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  	while(i < orchards.data.length) {
    var urbanorchard= orchards.data[i];

	
	var x= parseFloat(orchards.data[i][15][1]);
	var y= parseFloat(orchards.data[i][15][2]);
   
	if(x < minX) { minX = x; }
	if(x > maxX) { maxX = x; }
	
	if(x < minY) { minY = y; }
	if(x > maxY) { maxY = y; }

	
    i++;
  }



var i= 0;
  while(i < orchards.data.length) {
    var urbanorchards= orchards.data[i];
	
	
	var neighborhood= urbanorchards[11];
	var location= urbanorchards[13];
	var name= urbanorchards[9];
	

	var Lat= parseFloat(orchards.data[i][15][1]);
	var Lon= parseFloat(orchards.data[i][15][2]);
	var marker = new google.maps.Marker({
        position: new google.maps.LatLng(Lat, Lon),
        title: urbanorchards[9],
        icon: "images/apple3.png", 
        map: myMap

      }); 
	i++;
  
/*
	var beeHeatmapData = [];
	  var i=0;

	  while(i < beedata.length) {
	    var column = beedata[i];

	    beeHeatmapData.push(
	      new google.maps.LatLng(column.Lat,column.Lng)  
	      )

	      i++;      
	    }

	    var heatmap = new google.maps.visualization.HeatmapLayer({
	      data: beeHeatmapData,
	      radius: 15
	    });
	    heatmap.setMap(myMap); */
    
      
      
    
	
	var diffX = maxX - minX;
	var screenX =  (x - minX) / diffX * 500;
	var diffY = maxY - minY;
	var screenY = (y - minY) / diffY * 300;
   
   
    /*var div = $("<div>").css({
		position:"absolute", width: 10, height: 10, borderRadius: 50, backgroundColor:"red", left: screenX, top: screenY, opacity:0.5,
	}).attr(name + neighborhood);

	$("body").append(div);*/
	
	 i++;
  }
});
