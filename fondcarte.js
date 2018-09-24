var mymap = null; // carte leaflet pour affichage

mymap = L.map('mapid').setView([55.952130,-3.349550], 9);

var stops = {
    edinburghAirport : [55.952130,-3.349550],
    pitlochry : [56.704361,-3.729711],
    kingussie :[57.079670,-4.053700],
    balnain : [57.338160,-4.582270],
    ploddaFalls : [57.277039,-4.825353],
    lochAffric  :[57.262281,-5.010369],
    kinnlochleven : [56.712990,-4.965300],
    finntry : [56.052983,-4.224210]
};



L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(mymap);

var marker = L.marker(stops.edinburghAirport).addTo(mymap);
// marker.bindPopup("<b>Arrived !</b>");


L.Routing.control({
    waypoints: [
      L.latLng(55.952130,-3.349550),
      L.latLng(56.704361,-3.729711),
      L.latLng(57.079670,-4.053700),
      L.latLng(57.338160,-4.582270),
      L.latLng(57.277039,-4.825353),
      L.latLng(57.262281,-5.010369),
      L.latLng(56.712990,-4.965300),
      L.latLng(56.052983,-4.224210),
      L.latLng(55.952130,-3.349550)
    ],
    router: L.Routing.graphHopper('a701c00a-589c-45c2-b187-72f76d7135ba')
  }).addTo(mymap);

