function myFunction() {
	$.getJSON("http://ip.jsontest.com",    function (data) {
		$.each(data, function(key, value){
			console.log(key, value);
		});
	});
    alert("I am an alert box!");
}
	
	function initialize()
{
var locations = [
      ['Pasar Jaya Sawah Besar', -6.1540989, 106.8233203, 1],
	  ['Pasar Jaya Senen', -6.237207, 106.8257511, 2],
	  ['HERO Fatmawati', -6.301283, 106.7949294, 3]
    ];

    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 11,
      center: new google.maps.LatLng(-6.2297465, 106.829518),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

function loadScript()
{
/** 
 var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
  document.body.appendChild(script);
  */
  
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src="http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
  
  
}

