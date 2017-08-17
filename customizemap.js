if (typeof gmapjs === 'undefined') {
  gmapjs = {}
}
gmapjs.customizeMap = function(map) {
  var markerIcon = {
    url: 'https://2.bp.blogspot.com/-TmObZ6JmECw/WY1VSvJdx7I/AAAAAAAAAF4/yZLSuWJB-jc8s6BjU009yvpTVEbcHv43ACLcBGAs/s1600/oak.png',
    labelOrigin: new google.maps.Point(11, 50)
  };

  var markers = [
    {
      label: "Dąb Warcisław",
      position: {lat: 54.175182, lng: 15.711783},
      icon: markerIcon
    },

    {
      label: "Dąb Bolesław",
      position: {lat: 54.180846, lng: 15.695339},
      icon: markerIcon
    }
  ];

  return markers;
};