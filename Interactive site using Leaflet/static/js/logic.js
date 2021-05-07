// Creating map object
var myMap = L.map("map", {
    center: [37.43, -78.65],
    zoom: 7.5
  });

  // Store API query variables
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  // Markers, pop-ups and text boxes
  var marker = L.marker([37.84, -76.27], {
    draggable: false,
    title: "VA-01 Representative: Rob Wittman (R)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=1&bounds=-79.063,39.347,-74.887,36.652'><b>Virginia 1st Congressional District</a><br>Total PPP loan amounts: $245,123,057<br>7% of state total<br>Industry receiving the most loans: Construction</b>")
  
  var marker = L.marker([36.85, -75.97], {
    draggable: false,
    title: "VA-02 Representative: Elaine Luria (D)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=2&bounds=-77.985,38.583,-73.979,35.973'><b>Virginia 2nd Congressional District</a><br>Total PPP loan amounts: $265,217,409<br>8% of state total<br>Industry receiving the most loans: Accomodation & Food Services</b>")
  
  var marker = L.marker([37.08, -76.47], {
    draggable: false,
    title: "VA-03 Representative: Bobby Scott (D)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=3&bounds=-77.61,37.608,-75.537,36.251'><b>Virginia 3rd Congressional District</a><br>Total PPP loan amounts: $190,516,737<br>6% of state total<br>Industry receiving the most loans: Other services except Public Administration</b>")
  
  var marker = L.marker([37.54, -77.43], {
    draggable: false,
    title: "VA-04 Representative: Donald McEachin (D)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=4&bounds=-78.828,38.275,-75.138,35.863'><b>Virginia 4th Congressional District</a><br>Total PPP loan amounts: $257,982,551<br>8% of state total<br>Industry receiving the most loans: Accomodation & Food Services</b>")
  
  var marker = L.marker([36.69, -78.90], {
    draggable: false,
    title: "VA-05 Representative: Bob Good (R)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=5&bounds=-81.889,39.668,-75.972,35.837'><b>Virginia 5th Congressional District</a><br>Total PPP loan amounts: $296,615,444<br>8% of state total<br>Industry receiving the most loans: Construction</b>")
  
  var marker = L.marker([38.14, -79.07], {
    draggable: false,
    title: "VA-06 Representative: Ben Cline (R)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=6&bounds=-81.568,39.71,-76.577,36.494'><b>Virginia 6th Congressional District</a><br>Total PPP loan amounts: $243,769,001<br>7% of state total<br>Industry receiving the most loans: Accomodation & Food Services</b>")
  
  var marker = L.marker([37.99, -77.97], {
    draggable: false,
    title: "VA-07 Representative: Abigail Spanberger (D)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=7&bounds=-79.612,38.949,-76.161,36.716'><b>Virginia 7th Congressional District</a><br>Total PPP loan amounts: $437,968,268<br>13% of state total<br>Industry receiving the most loans: Professional, Scientific & Technical Services</b>")
  
  var marker = L.marker([38.80, -77.04], {
    draggable: false,
    title: "VA-08 Don Beyer (D)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=8&bounds=-77.638,39.092,-76.64,38.454'><b>Virginia 8th Congressional District</a><br>Total PPP loan amounts: $321,780,453<br>10% of state total<br>Industry receiving the most loans: Professional, Scientific & Technical Services</b>")
  
  var marker = L.marker([36.94, -81.08], {
    draggable: false,
    title: "VA-09 Morgan Griffith (R)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=9&bounds=-84.471,39.074,-78.811,35.384'><b>Virginia 9th Congressional District</a><br>Total PPP loan amounts: $187,991,428<br>6% of state total<br>Industry receiving the most loans: Health Care & Social Assistance</b>")
  
  var marker = L.marker([39.07, -77.65], {
    draggable: false,
    title: "VA-10 Representative: Jennifer Wexton (D)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=10&bounds=-79.298,40.007,-76.366,38.143'><b>Virginia 10th Congressional District</a><br>Total PPP loan amounts: $551,924,292<br>16% of state total<br>Industry receiving the most loans: Professional, Scientific & Technical Services</b>")
  
  var marker = L.marker([38.84, -77.30], {
    draggable: false,
    title: "VA-11 Representative: Gerry Connolly (D)"
  }).addTo(myMap);
  
  marker.bindPopup("<a href='https://www.govtrack.us/congress/members/embed/mapframe?state=va&district=11&bounds=-77.98,39.196,-76.629,38.333'><b>Virginia 11th Congressional District</a><br>Total PPP loan amounts: $359,333,768<br>11% of state total<br>Industry receiving the most loans: Professional, Scientific & Technical Services</b>")
  
