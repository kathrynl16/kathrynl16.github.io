 // AIzaSyCRirnFWpOqyb_MhW4Sgwe0xRn7hWTIXV0

var map;

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7128, lng: -74.0059},
          zoom: 12    
        });
      }
// function renderMarkers() {
//   var marker = new google.maps.Marker({
//     position: {lat: 40.7128, lng: -74.0059},  
//     map: map
//   })
// }

initMap()
// renderMarkers()

$.ajax({
    type: 'GET',
    url: 'http://api.citybik.es/citi-bike-nyc.json',
    dataType: 'jsonp',
    success: function (response){
        // console.log(response); 

      response.forEach(function (station){
        var name = station.name;
        var bikes = station.bikes;
        var free = station.free;
        var lat = station.lat/1000000;
        var long = station.lng/1000000;
        console.log(lat +", "+long)
        function renderMarkers() {
          var marker = new google.maps.Marker({
          position: {lat: lat, lng: long},  
          map: map,
          title: name
        })
        // create if else statement on changing the icons if there are bikes available or not
        // refer to this link https://developers.google.com/maps/documentation/javascript/custom-markers
      }
      renderMarkers() 

        // $('#container')
        //   .append("<p>" + name + "</p>")
        //   .append("<p> Spaces Free: " + free + "</p>")
        //   .append("<p> Bikes Available: " + bikes + "</p>")
        //   .append("<hr>");
      })
    },
})  

