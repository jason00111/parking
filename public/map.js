function myMap() {
  var mapProp = {
    // center:new google.maps.LatLng(2112625.9794610441, 6059698.9833894819),
    fullscreenControl: true,
    center: new google.maps.LatLng(37.78409100, -122.23709600),
    zoom: 12,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  const sampleData = meter.result.records.map(record => record.lonlatconc.split(', ').map(string => JSON.parse(string)) )

  const smallSetOfMeters = meters.slice(0)

  smallSetOfMeters.filter(meter => meter.notFound.length === 0).forEach( meterObject => {

    let lng_something = +meterObject.lng
    let lat_something = +meterObject.lat


    let lat0 = 37.78429, lng0 = -122.2370

    new google.maps.Marker({
        icon: meterObject.notFound.length === 0 ? 'meterIcon.png' : 'meterNotFoundIcon.png',
        position: {
          lat:  lng_something,
          lng: lat_something
        },
        map: map,
        title: 'Hello World!'
    })

    }

  )

}
