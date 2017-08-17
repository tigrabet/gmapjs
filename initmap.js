function initMap() {
  if ((typeof gmapjs === 'undefined') || (typeof gmapjs.customizeMap === 'undefined')) {
    return;
  }
  var markers = gmapjs.customizeMap(map);
  var styledMapType = new google.maps.StyledMapType([
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#beb9a5"
      }]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#beb9a5"
      }]
    }
  ]);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    mapTypeId: 'styled_map'
  });
  map.mapTypes.set('styled_map', styledMapType);

  for (var i=0; i<markers.length; i++) {
    var marker = markers[i];
    marker.map = map;
    var mapMarker = new google.maps.Marker(marker);
    if (i === 0) {
      var mapCenter = marker.position;
      map.setCenter(mapCenter);
    }
  }
}
