// Initialize the map
var map = L.map('map').setView([59.3293, 18.0686], 6);

// Add the tile layer (OpenStreetMap as the base map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

// Add markers for counties
var counties = [
  { name: 'Stockholm', latlng: [59.3293, 18.0686], tooltip: 'Information about Stockholm County goes here' },
  { name: 'Skåne', latlng: [55.605, 13.0038], tooltip: 'Information about Skåne County goes here' }
  // Add more counties and tooltips as needed
];

counties.forEach(function(county) {
  var marker = L.marker(county.latlng).addTo(map);
  marker.bindTooltip('<strong>' + county.name + '</strong><br>' + county.tooltip);
});
