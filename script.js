// mapquest-tile-layer reference page https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/

L.mapquest.key = '4sUiH2PZdhJAwlqe1A8XzjAxr5YGSiDP';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [34.6786, 33.0413],
  // change tileLayer to 'dark' from default 'map'/'hybrid'
  layers: L.mapquest.tileLayer('dark'),
  zoom: 8
});

// Controls
// Add controls. Positioned bottom right of map. 
map.addControl(L.mapquest.control({ position: 'bottomright'}));

// Add control to toggle between default, dark map view and satellite view.
map.addControl(L.mapquest.satelliteControl());

// Implementing drop-in Place Search API functionality. Not restricted to the market/current map. 

let searchControl = L.mapquest.searchControl().addTo(map);


// Add icon
L.marker([34.6786, 33.0413], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('This is Limassol!')
.addTo(map);

