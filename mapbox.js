mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vpc21vc21zciIsImEiOiJjaW80bDFwOGYwMWtodmJsenFzcHdtcjc1In0.F2kfJUm200LpI-1OeR5_Qg';

<link href='https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css' rel='stylesheet' />
<script src='https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.js'></script>
<script src='https://api.mapbox.com/mapbox.js/plugins/turf/v3.0.11/turf.min.js'></script>

<div id='map'></div>

body {
  margin: 0;
  padding: 0;
}

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vpc21vc21zciIsImEiOiJjaW80bDFwOGYwMWtodmJsenFzcHdtcjc1In0.F2kfJUm200LpI-1OeR5_Qg';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
  center: [-84.5, 38.05], // starting position
  zoom: 12 // starting zoom
});

var hospitals = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: { Name: 'VA Medical Center -- Leestown Division', Address: '2250 Leestown Rd' }, geometry: { type: 'Point', coordinates: [-84.539487, 38.072916] } },
    { type: 'Feature', properties: { Name: 'St. Joseph East', Address: '150 N Eagle Creek Dr' }, geometry: { type: 'Point', coordinates: [-84.440434, 37.998757] } },
    { type: 'Feature', properties: { Name: 'Central Baptist Hospital', Address: '1740 Nicholasville Rd' }, geometry: { type: 'Point', coordinates: [-84.512283, 38.018918] } },
    { type: 'Feature', properties: { Name: 'VA Medical Center -- Cooper Dr Division', Address: '1101 Veterans Dr' }, geometry: { type: 'Point', coordinates: [-84.506483, 38.02972] } },
    { type: 'Feature', properties: { Name: 'Shriners Hospital for Children', Address: '1900 Richmond Rd' }, geometry: { type: 'Point', coordinates: [-84.472941, 38.022564] } },
    { type: 'Feature', properties: { Name: 'Eastern State Hospital', Address: '627 W Fourth St' }, geometry: { type: 'Point', coordinates: [-84.498816, 38.060791] } },
    { type: 'Feature', properties: { Name: 'Cardinal Hill Rehabilitation Hospital', Address: '2050 Versailles Rd' }, geometry: { type: 'Point', coordinates: [-84.54212, 38.046568] } },
    { type: 'Feature', properties: { Name: 'St. Joseph Hospital', ADDRESS: '1 St Joseph Dr' }, geometry: { type: 'Point', coordinates: [-84.523636, 38.032475] } },
    { type: 'Feature', properties: { Name: 'UK Healthcare Good Samaritan Hospital', Address: '310 S Limestone' }, geometry: { type: 'Point', coordinates: [-84.501222, 38.042123] } },
    { type: 'Feature', properties: { Name: 'UK Medical Center', Address: '800 Rose St' }, geometry: { type: 'Point', coordinates: [-84.508205, 38.031254] } }
  ]
};
var libraries = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: { Name: 'Village Branch', Address: '2185 Versailles Rd' }, geometry: { type: 'Point', coordinates: [-84.548369, 38.047876] } },
    { type: 'Feature', properties: { Name: 'Northside Branch', ADDRESS: '1733 Russell Cave Rd' }, geometry: { type: 'Point', coordinates: [-84.47135, 38.079734] } },
    { type: 'Feature', properties: { Name: 'Central Library', ADDRESS: '140 E Main St' }, geometry: { type: 'Point', coordinates: [-84.496894, 38.045459] } },
    { type: 'Feature', properties: { Name: 'Beaumont Branch', Address: '3080 Fieldstone Way' }, geometry: { type: 'Point', coordinates: [-84.557948, 38.012502] } },
    { type: 'Feature', properties: { Name: 'Tates Creek Branch', Address: '3628 Walden Dr' }, geometry: { type: 'Point', coordinates: [-84.498679, 37.979598] } },
    { type: 'Feature', properties: { Name: 'Eagle Creek Branch', Address: '101 N Eagle Creek Dr' }, geometry: { type: 'Point', coordinates: [-84.442219, 37.999437] } }
  ]
};

map.on('load', function() {
  map.addLayer({
    id: 'hospitals',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: hospitals
    },
    layout: {
      'icon-image': 'hospital-15',
      'icon-allow-overlap': true
    },
    paint: { }
  });
  map.addLayer({
    id: 'libraries',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: libraries
    },
    layout: {
      'icon-image': 'library-15'
    },
    paint: { }
  });
});
