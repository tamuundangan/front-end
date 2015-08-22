function myFunction() {
	$.getJSON("http://ip.jsontest.com",    function (data) {
		$.each(data, function(key, value){
			console.log(key, value);
		});
	});
    alert("I am an alert box!");
}

	function initialize() {
        var myLatlng = new google.maps.LatLng(40.779502, -73.967857);
        var myOptions = {
            zoom: 12,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        TestMarker();
    }

    // Function for adding a marker to the page.
    function addMarker(location) {
        marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Testing the addMarker function
    function TestMarker() {
           CentralPark = new google.maps.LatLng(37.7699298, -122.4469157);
           addMarker(CentralPark);
    }