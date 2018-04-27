var flightPathCoordinates;
var flightPath;
var map;
var viajes = [];
var days_month = [31,28,31,30,31,30,31,31,30,31,30,31];
var data = [];
var mul = 1;
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
    var locations = [
    ['2', '20.666378', '-103.34882'],
    ['3', '20.667228', '-103.366'],
    ['4', '20.66769', '-103.368252'],
    ['5', '20.69175', '-103.36255'],
    ['6', '20.681151', '-103.338863'],
    ['8', '20.6807519', '-103.3443801'],
    ['9', '20.666771', '-103.350562'],
    ['10', '20.681871', '-103.350396'],
    ['11', '20.681984', '-103.353835'],
    ['12', '20.681786', '-103.357267'],
    ['13', '20.681081', '-103.360099'],
    ['14', '20.681989', '-103.36292'],
    ['15', '20.667623', '-103.370499'],
    ['16', '20.682059', '-103.365969'],
    ['17', '20.683191', '-103.369349'],
    ['18', '20.682007', '-103.372642'],
    ['19', '20.679086', '-103.372841'],
    ['20', '20.679296', '-103.370658'],
    ['21', '20.678835', '-103.368045'],
    ['22', '20.678714', '-103.36573'],
    ['23', '20.67966', '-103.362224'],
    ['24', '20.679389', '-103.35913'],
    ['25', '20.679309', '-103.356281'],
    ['26', '20.678777', '-103.354035'],
    ['27', '20.680227', '-103.350146'],
    ['28', '20.680478', '-103.348377'],
    ['29', '20.679861', '-103.345198'],
    ['30', '20.684187', '-103.36113'],
    ['31', '20.679505', '-103.339753'],
    ['32', '20.675461', '-103.367501'],
    ['33', '20.685652', '-103.368215'],
    ['34', '20.6772627', '-103.344908'],
    ['35', '20.677419', '-103.347983'],
    ['36', '20.676461', '-103.350244'],
    ['37', '20.677315', '-103.3534145'],
    ['38', '20.676078', '-103.356458'],
    ['39', '20.678034', '-103.358466'],
    ['40', '20.676656', '-103.362331'],
    ['41', '20.677108', '-103.365088'],
    ['42', '20.676067', '-103.367049'],
    ['43', '20.67671', '-103.37066'],
    ['44', '20.676628', '-103.372687'],
    ['45', '20.673756', '-103.372613'],
    ['46', '20.674636', '-103.371639'],
    ['47', '20.675444', '-103.370147'],
    ['48', '20.675014', '-103.365025'],
    ['49', '20.674931', '-103.362351'],
    ['50', '20.674721', '-103.358548'],
    ['51', '20.6740865', '-103.3563196'],
    ['52', '20.675746', '-103.354579'],
    ['53', '20.674559', '-103.352663'],
    ['54', '20.675244', '-103.347889'],
    ['55', '20.675401', '-103.345665'],
    ['56', '20.675421', '-103.342049'],
    ['57', '20.672696', '-103.345366'],
    ['58', '20.671971', '-103.347422'],
    ['59', '20.672516', '-103.349573'],
    ['60', '20.672641', '-103.353542'],
    ['61', '20.672231', '-103.355508'],
    ['62', '20.6734', '-103.357684'],
    ['63', '20.671778', '-103.361274'],
    ['64', '20.673072', '-103.365055'],
    ['65', '20.674132', '-103.366139'],
    ['66', '20.673321', '-103.370571'],
    ['67', '20.672372', '-103.372584'],
    ['68', '20.671364', '-103.371786'],
    ['69', '20.6668825', '-103.3555917'],
    ['70', '20.670512', '-103.368306'],
    ['71', '20.670468', '-103.366071'],
    ['72', '20.671455', '-103.363633'],
    ['73', '20.670362', '-103.359537'],
    ['74', '20.67056', '-103.357589'],
    ['75', '20.669955', '-103.355032'],
    ['76', '20.67131', '-103.351651'],
    ['77', '20.669628', '-103.348768'],
    ['78', '20.670243', '-103.346195'],
    ['79', '20.675631', '-103.36134'],
    ['80', '20.667946', '-103.346775'],
    ['81', '20.6688627', '-103.3513022'],
    ['82', '20.68432', '-103.373252'],
    ['83', '20.667352', '-103.363338'],
    ['84', '20.669326', '-103.362535'],
    ['85', '20.667532', '-103.3595222'],
    ['86', '20.669306', '-103.368312'],
    ['87', '20.670426', '-103.373378'],
    ['88', '20.66704', '-103.372444'],
    ['91', '20.73244', '-103.396083'],
    ['92', '20.726376', '-103.397466'],
    ['93', '20.723081', '-103.398071'],
    ['94', '20.7292222', '-103.3952005'],
    ['95', '20.730841', '-103.394267'],
    ['96', '20.725815', '-103.395308'],
    ['97', '20.726196', '-103.392672'],
    ['98', '20.72201', '-103.39427'],
    ['99', '20.685108', '-103.333746'],
    ['100', '20.723889', '-103.394585'],
    ['101', '20.726558', '-103.389242'],
    ['102', '20.728446', '-103.39031'],
    ['103', '20.720438', '-103.391894'],
    ['104', '20.724044', '-103.390802'],
    ['105', '20.725261', '-103.387365'],
    ['106', '20.721643', '-103.3902'],
    ['107', '20.72374', '-103.388657'],
    ['108', '20.727068', '-103.386286'],
    ['109', '20.7232207', '-103.3855829'],
    ['110', '20.721039', '-103.386942'],
    ['111', '20.72832', '-103.384156'],
    ['112', '20.722123', '-103.383147'],
    ['113', '20.72489', '-103.383614'],
    ['114', '20.72356', '-103.381901'],
    ['115', '20.727913', '-103.388162'],
    ['116', '20.68692', '-103.33467'],
    ['117', '20.720452', '-103.388629'],
    ['118', '20.729724', '-103.398598'],
    ['119', '20.728147', '-103.393858'],
    ['120', '20.727381', '-103.399976'],
    ['125', '20.67342', '-103.40945'],
    ['126', '20.67195', '-103.40641'],
    ['127', '20.6707', '-103.40458'],
    ['128', '20.66984', '-103.40968'],
    ['129', '20.66844', '-103.40495'],
    ['130', '20.66731', '-103.40953'],
    ['131', '20.66677', '-103.40335'],
    ['132', '20.66581', '-103.40662'],
    ['133', '20.66312806', '-103.4079076'],
    ['134', '20.66033761', '-103.4037559'],
    ['135', '20.66463', '-103.404'],
    ['136', '20.65925105', '-103.4065612'],
    ['137', '20.65938', '-103.40195'],
    ['138', '20.69705', '-103.36322'],
    ['139', '20.65701', '-103.40464'],
    ['140', '20.656866', '-103.397725'],
    ['141', '20.65381', '-103.40134'],
    ['142', '20.64483', '-103.31948'],
    ['143', '20.6383352', '-103.3163317'],
    ['144', '20.64193', '-103.31366'],
    ['145', '20.64185', '-103.3106'],
    ['146', '20.64188', '-103.30651'],
    ['147', '20.641848', '-103.3026'],
    ['148', '20.64176', '-103.31716'],
    ['149', '20.63841', '-103.31334'],
    ['150', '20.63816', '-103.31148'],
    ['151', '20.63834', '-103.30952'],
    ['152', '20.63922', '-103.30465'],
    ['153', '20.63613', '-103.3019'],
    ['154', '20.69493', '-103.37333'],
    ['155', '20.6972', '-103.36773'],
    ['156', '20.68456', '-103.35699'],
    ['157', '20.69865', '-103.35519'],
    ['158', '20.696097', '-103.349382'],
    ['159', '20.69610588', '-103.3549492'],
    ['160', '20.69311', '-103.37298'],
    ['161', '20.69324', '-103.36757'],
    ['162', '20.692725', '-103.3516'],
    ['163', '20.6891', '-103.35071'],
    ['164', '20.68981', '-103.3582'],
    ['165', '20.693072', '-103.354209'],
    ['166', '20.687196', '-103.350525'],
    ['167', '20.69269', '-103.37082'],
    ['168', '20.68969', '-103.37486'],
    ['169', '20.68985', '-103.37071'],
    ['170', '20.68861', '-103.365814'],
    ['171', '20.68348', '-103.34853'],
    ['172', '20.6822', '-103.34601'],
    ['173', '20.68465', '-103.34526'],
    ['174', '20.68981', '-103.353973'],
    ['175', '20.68586', '-103.33964'],
    ['176', '20.68725', '-103.37363'],
    ['177', '20.68723', '-103.37084'],
    ['178', '20.686228', '-103.336305'],
    ['179', '20.687', '-103.36582'],
    ['180', '20.68765483', '-103.3627938'],
    ['181', '20.68925', '-103.3361'],
    ['182', '20.68605', '-103.35408'],
    ['183', '20.68447', '-103.37989'],
    ['184', '20.68427', '-103.37653'],
    ['185', '20.68168', '-103.38197'],
    ['186', '20.68153', '-103.3785'],
    ['187', '20.68132', '-103.37537'],
    ['188', '20.67914', '-103.38253'],
    ['189', '20.67947', '-103.37926'],
    ['190', '20.67945', '-103.376'],
    ['191', '20.67741', '-103.38387'],
    ['192', '20.67691', '-103.37993'],
    ['193', '20.67647', '-103.37606'],
    ['194', '20.67438', '-103.38488'],
    ['195', '20.67554', '-103.38409'],
    ['196', '20.67455', '-103.37998'],
    ['197', '20.67448', '-103.37618'],
    ['198', '20.67206', '-103.384'],
    ['199', '20.67207', '-103.37997'],
    ['200', '20.67189', '-103.37608'],
    ['201', '20.67016', '-103.38448'],
    ['202', '20.66868', '-103.3731'],
    ['203', '20.66927', '-103.37983'],
    ['204', '20.66957', '-103.37623'],
    ['205', '20.66557', '-103.39134'],
    ['206', '20.66667', '-103.38863'],
    ['207', '20.66816', '-103.38488'],
    ['208', '20.66702', '-103.37621'],
    ['209', '20.6647', '-103.38855'],
    ['210', '20.6625', '-103.38407'],
    ['211', '20.669931', '-103.394307'],
    ['212', '20.66736', '-103.3947'],
    ['213', '20.6662882', '-103.3988986'],
    ['214', '20.66623', '-103.39654'],
    ['215', '20.66501', '-103.39788'],
    ['216', '20.66511', '-103.39388'],
    ['217', '20.661387', '-103.392533'],
    ['218', '20.66', '-103.39496'],
    ['219', '20.65931', '-103.38884'],
    ['220', '20.65846', '-103.39092'],
    ['221', '20.65761', '-103.39363'],
    ['222', '20.65712973', '-103.3883797'],
    ['223', '20.6564', '-103.38956'],
    ['224', '20.65454', '-103.39162'],
    ['225', '20.65158', '-103.38957'],
    ['226', '20.66468', '-103.33357'],
    ['227', '20.66114', '-103.3315'],
    ['228', '20.65925', '-103.33055'],
    ['229', '20.65721', '-103.33046'],
    ['230', '20.657817', '-103.32898'],
    ['231', '20.655', '-103.32186'],
    ['232', '20.65251', '-103.32553'],
    ['233', '20.65475', '-103.32719'],
    ['234', '20.64962', '-103.32356'],
    ['235', '20.64874', '-103.31939'],
    ['236', '20.64707', '-103.32147'],
    ['237', '20.64698', '-103.30619'],
    ['238', '20.6461', '-103.3102'],
    ['239', '20.64434', '-103.30678'],
    ['240', '20.64504', '-103.30518'],
    ['241', '20.6641', '-103.4003'],
    ['242', '20.66234072', '-103.3981344'],
    ['243', '20.67276201', '-103.3976249'],
    ['244', '20.68669', '-103.37657'],
    ['246', '20.685108', '-103.333746'],
    ['247', '20.68795', '-103.33343'],
    ['248', '20.68692', '-103.33467'],
    ['249', '20.69705', '-103.36322'],
    ['250', '20.6969715', '-103.3581976'],
    ['251', '20.639042', '-103.301239'],
    ['253', '20.6731682', '-103.3826893']
    ];
    var icon = {
        url: 'http://i1074.photobucket.com/albums/w409/Juan_Carlos_Quirino_Carrasco/bici-min_zpsdeztx5ad.png', // url
        scaledSize: new google.maps.Size(12, 12), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };


    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
           position: new google.maps.LatLng(locations[i][1], locations[i][2]),
           icon: icon,
           map:map

        });
    }
}

//Date - IMPORTANT
var year = 2018;
var month = 3;
var day = 14;
var hour = 16;
var minute = 16;
var second = 0;
var dateStr;

//timer
function timer(){
    $('#timer').text(toTimer())
    makeRequest();
    draw_travels();
    setTimeout(timer, 1000);
} timer();

function toTimer(){
   minute = minute + (1*mul);

   if (second == 60) {minute++; second = 0;}
   if (minute == 60) {hour++; minute = 0;}
   //We need to start on 6 am
   if (hour == 24) {day++; hour = 6;}
   if (day == days_month[month-1]) {month++; day = 1;}
   if (month == 13) {year++; month=1;}
   return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
}

function getTimeStr() {
    return year + "-" + month + "-" + day + "_" + hour + ":" + minute + ":" + second;
}
function setTime(){
  year = $('#year').val();
  month = $('#month').val();
  day = $('#day').val();
  hour = $('#hour').val();
  minute = $('#min').val();
  second = $('#sec').val();
}
function stop(){
  clearTime(timer());
}


//JSON DATA
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
    setTimeout(getData, 200);
}

//DRAWING
var viajes = []
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
          strokeColor: viaje.color,
          strokeOpacity: 1.0,
          strokeWeight: 1
    });
    flightPath.setMap(map);
    viajes.push(flightPath);
}
function main() {
    setTimeout(function (){},2000);
    $('#timer').text(toTimer())
    timer();
}
//Run
//main();
