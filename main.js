var flightPathCoordinates;
var flightPath;
var map;
var viajes = []
function initMap() {
  //Define how a map will look
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 20.675,
            lng: -103.35
        },
        mapTypeId: 'roadmap',
        disableDefaultUI: false,
        zoomControl: false,
    });

}

//Date - IMPORTANT
var year = 2018;
var month = 3;
var day = 15;
var hour = 16;
var minute = 16;
var second = 0;
var dateStr;

//timer
function timer(){
    makeRequest();
    setTimeout(getData, 200);
    draw_travels();
    second++;
    setTimeout(refreshData, 1000);
} timer();

function getTimeStr() {
    return year + "-" + month + "-" + day + "_" + hour + ":" +minute + ":" + second
}


//JSON DATA
var data;
function getData(){
    data = JSON.parse(xhr.response);
}
function addLine() {
    flightPath.setMap(map);
}

function removeLine() {
    flightPath.setMap(null);
}

//REQUEST
//http://127.0.0.1:5000/viajes/2018-03-06_16:16:32
var xhr;
function makeRequest(){
    xhr = new XMLHttpRequest();
    dateStr = getTimeStr();
    xhr.open("GET", "http://127.0.0.1:5000/viajes/"+dateStr, true);
    xhr.send();

}


//DRAWING
//Remove lines
function removeLines() {
   for (var i = 0; i < viajes.length; i++) {
      viajes[i].setMap(null);
   }
}
//Draw all the travels in data
function draw_travels() {
   removeLines();
    for (var i = 0, len = data.length; i < len; i++) {
        drawLine(data[i])
    }
}

//Draw line
function drawLine(viaje) {

    route = [
        {lat: Number(viaje.latitude_origen),
         lng: Number(viaje.longitude_origen)},

        {lat: Number(viaje.latitude_destino),
         lng: Number(viaje.longitude_destino)}
    ];
    /*
    route = [
          {lat: 20.67966, lng: -103.362224},
          {lat: 20.67966, lng: -103.362224}
        ];
    */
    flightPath = new google.maps.Polyline({
          path: route,
          strokeColor: '#0',
          strokeOpacity: 1.0,
          strokeWeight: 1
    });
    flightPath.setMap(map);
    viajes.push(flightPath);
}
//NOTES:
    /*
    DONE:
        -Cleaned the data
        -Added coords to data
        -Created server
        -Added CORS to header

    TO DO:
        1-Implement the clock
        2-Make it to work with different speeds
        3-Test the responses from the server
        4-Kill Max
        5-Make a function to draw all the lines from the json response
        6-Make a function to erase all the lines
            6.1-Might need to use a queue in the one that draws so we can empty it
            when we need to clear it
        7-(5,6) <- Instead of we can search for a map.clear() method

    */
