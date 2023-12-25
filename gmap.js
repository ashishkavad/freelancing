function initMap() {
	var markerImage = document.getElementById("map").getAttribute('data-marker-img');
    var markerCenter = { 
    	lat: 51.486918, // Latitude Your Geo location
    	lng: -0.008229 // Longitude Your Geo location
    };
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    	center: markerCenter,
  		zoomControl: true,
  		mapTypeControl: false,
  		scaleControl: false,
  		streetViewControl: false,
  		rotateControl: false,
  		fullscreenControl: false,
  		styles: [ {"elementType": "geometry", "stylers": [ {"color": "#f5f5f5"} ] } , {"elementType": "labels.icon", "stylers": [ {"visibility": "off"} ] } , {"elementType": "labels.text.fill", "stylers": [ {"color": "#616161"} ] } , {"elementType": "labels.text.stroke", "stylers": [ {"color": "#f5f5f5"} ] } , {"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ {"color": "#bdbdbd"} ] } , {"featureType": "poi", "elementType": "geometry", "stylers": [ {"color": "#eeeeee"} ] } , {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [ {"color": "#757575"} ] } , {"featureType": "poi.park", "elementType": "geometry", "stylers": [ {"color": "#d4e1c9"} ] } , {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ {"color": "#9e9e9e"} ] } , {"featureType": "road", "elementType": "geometry", "stylers": [ {"color": "#ffffff"} ] } , {"featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ {"color": "#757575"} ] } , {"featureType": "road.highway", "elementType": "geometry", "stylers": [ {"color": "#c0c0bc"} ] } , {"featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ {"color": "#616161"} ] } , {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ {"color": "#9e9e9e"} ] } , {"featureType": "transit.line", "elementType": "geometry", "stylers": [ {"color": "#d4e1c9"} ] } , {"featureType": "transit.station", "elementType": "geometry", "stylers": [ {"color": "#eeeeee"} ] } , {"featureType": "water", "elementType": "geometry", "stylers": [ {"color": "#99b3cc"} ] } , {"featureType": "water", "elementType": "labels.text.fill", "stylers": [ {"color": "#9e9e9e"} ] } ]
    });
    var marker = new google.maps.Marker({
      position: markerCenter,
      map: map,
      icon: markerImage
    });
}
