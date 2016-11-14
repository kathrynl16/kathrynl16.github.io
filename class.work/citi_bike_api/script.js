$.ajax({
    type: 'GET',
    url: 'http://api.citybik.es/citi-bike-nyc.json',
    dataType: 'jsonp',
    success: function (response){
      console.log(response); 
      response.forEach(function (station){
        var name = station.name;
        var bikes = station.bikes;
        var free = station.free;
        $('#container')
          .append("<p>" + name + "</p>")
          .append("<p> Spaces Free: " + free + "</p>")
          .append("<p> Bikes Available: " + bikes + "</p>")
          .append("<hr>");
      })


    },



})