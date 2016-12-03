/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.
   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
$(document).ready(function() {
  
  var osm = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

  var darkLayer = L.tileLayer('https://api.mapbox.com/styles/v1/nhodge253/ciw8zxa7s001g2qp4q721u281/tiles/256/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,                         Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.mapbox-streets-v7',
    accessToken: 'pk.eyJ1IjoibmhvZGdlMjUzIiwiYSI6ImNpdXo1b3hxbzA0ZmEyb25vY2hqMnViY2cifQ.K7f2e2dNhyc-fZrnccA6IQ'
  });

   var mapLayers = {
        "Night View": darkLayer,
        "OSM": osm
      }
   



var mymap = L.map('map-container').setView([47.5986, -122.3213], 16);
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:



L.tileLayer(osm).addTo(mymap);

L.control.layers(mapLayers).addTo(mymap);




});