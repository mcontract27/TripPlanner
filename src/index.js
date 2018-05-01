// console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoibW1vc2hrb3dpY2giLCJhIjoiY2pnbzN0M2MzMGd0bzM0cXYzYm9lcWk2aCJ9._XgQxM9S3BFBTfESWYoa2g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDom = document.createElement('div')
// markerDom.style.width = "32px";
// markerDom.style.height = "39px";
// markerDom.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDom).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
