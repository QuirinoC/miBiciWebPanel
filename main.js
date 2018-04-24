var flightPath;
var map;

function initMap() {
  //Define how a map will look
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 20.674058,
            lng: -103.350637
        },
        mapTypeId: 'roadmap',
        disableDefaultUI: false,
        zoomControl: false,

    });

    var flightPathCoordinates = [{
            lat: 37.772,
            lng: -122.214
        },
        {
            lat: 21.291,
            lng: -157.821
        },
        {
            lat: -18.142,
            lng: 178.431
        },
        {
            lat: -27.467,
            lng: 153.027
        }
    ];

    flightPath = new google.maps.Polyline({
        path: flightPathCoordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 1
    });

    addLine();
}

function addLine() {
    flightPath.setMap(map);
}

function removeLine() {
    flightPath.setMap(null);
}

//Date - IMPORTANT
var year = 2015;
var month = 6;
var day = 6;
var hour = 16;
var minute = 16;
var second = 32;
var dateStr;
//Variable to modify how fast
//1=1 sec, meaning realtime
var speed = 1;
function getTimeStr() {
    return year + "-" + month + "-" + day + "_" + hour + ":" +minute + ":" + second
}

//http://127.0.0.1:5000/viajes/2015-06-06_16:16:32
var xhr;
function makeRequest(){
    xhr = new XMLHttpRequest();
    dateStr = getTimeStr();
    xhr.open("GET", "http://127.0.0.1:5000/viajes/"+dateStr, true);
    xhr.send()
    console.log("Hello");
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
