var dolt_datasets = "https://www.dolthub.com/api/v1alpha1/pdap/datasets/master?q=";
var dolt_data = "https://www.dolthub.com/api/v1alpha1/pdap/data-intake/master?q=";

var us_coords = [48.01587229653939, -116.1989294314929];
var us_zoom = 3.5;

$(document).ready(function() {
    $('.loading').hide();
    $('#overview').show();
});

var map = L.map('map').setView(us_coords, us_zoom);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

var police_station = L.icon({
    iconUrl: '/images/police-station.svg',

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// give each state a popup
function onEachFeature(feature, layer) {
    var popupContent = "<p>" + feature.properties.STATE_NAME + " - " + hr_statuses[current_state[feature.properties.STATE_NAME]] + "</p> <a target='_blank' href='https://github.com/Police-Data-Accessibility-Project/Scrapers/tree/master/USA/"+abbreviations[feature.properties.STATE_NAME]+"'>Check it out on GitHub!</a>";

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}


var state_geojson = L.geoJSON(states, {

    style: function(feature) {
        console.log(feature.properties.STATE_NAME + ': ' +current_state[feature.properties.STATE_NAME]);
        return {color: statuses[current_state[feature.properties.name]]};
        
    },

    //onEachFeature: onEachFeature  //add a popup when the state is clicked
}).addTo(map);

    state_geojson.on('click', function(e) { 
        //Hide the "Click a state" message and show the div with state info
        $('#overview').hide();
        $('#state_info').show();

        console.log(e);
        var state_name = e.layer.feature.properties.name;
        var state_abbr = abbreviations[state_name];

        //fit state to ui
        const bounds = e.layer.getBounds();
        map.fitBounds(bounds);

        // State Name
        console.log(state_name + ' clicked!') ;
        $('#state_name').text(state_name);

        //GitHub Repo
        if(current_state[state_name] == 'not-started'){
            $('#progress').text('Not Started');
            $('#repo').attr('href', 'https://docs.pdap.io/data-collection/write-a-data-scraper');
            $('#repo').text('Be the first to contribute!');
        }
        else if(current_state[state_name] == 'in-progress'){
            $('#progress').text('In Progress!');
            $('#repo').attr('href', 'https://github.com/Police-Data-Accessibility-Project/Scrapers/tree/master/USA/'+state_abbr);
            $('#repo').text('/USA/'+state_abbr);
        }
        else{
            $('#progress').text('Help Needed!');
            $('#repo').attr('href', 'https://github.com/Police-Data-Accessibility-Project/Scrapers/tree/master/USA/'+state_abbr);
            $('#repo').text('/USA/'+state_abbr);
        }

        // Fetch Police Agencies from DoltHub
        var sql = "SELECT * FROM `agencies` where state_iso = '"+state_abbr+"'";
        var url = dolt_datasets + encodeURIComponent(sql);
        console.log('Fetching agencies from: '+ url);
        var settings = {
            "url": url,
            "method": "GET",
            "timeout": 0,
            "crossDomain":true
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            var result = JSON.parse(response);

            var rows = result['rows'];
            // add to the map
            rows.forEach(agency => {
                L.marker([agency['lat'], agency['lng']], {icon: greenIcon}).addTo(map).bindPopup("<p>"+agency['name']+"<p>");
            });
        });
        
    }); //end on click

$('#back').on('click',function(){
    //reset back to US
    map.setView(us_coords, us_zoom);
    $('#state_info').hide();
    $('#overview').show();
});