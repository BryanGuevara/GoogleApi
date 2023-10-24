  /*coordenadas de ESFE/AGAPE (para probarlo)
  lat: 13.736452
  lng: -89.7087065
 */
  let lat = 13.736452;
  let lng = -89.7087065;
  let coord = {lat ,lng};
  let autocomplete
  const input = document.getElementById('Autocompletar');
  let infoWindow;
  
  function iniciarMap(){
       var mapOptions = {
        zoom: 10,
        center: coord,
      };
      var map = new google.maps.Map(document.getElementById('map'),
          mapOptions);
          let marker = new google.maps.Marker({
            position: coord,
            map: map,
            gestureHandling: "greedy",
          });
       iniciarAutocompletar()
       infoWindow = new google.maps.InfoWindow();
  
       const locationButton = document.createElement("button");
     
       locationButton.textContent = "Ubicate";
       locationButton.classList.add("custom-map-control-button");
       map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
       locationButton.addEventListener("click", () => {
         // Try HTML5 geolocation.
         if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(
             (position) => {
               const pos = {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude,
               };
     
               infoWindow.setPosition(pos);
               infoWindow.setContent("Ya te encontre >:D");
               infoWindow.open(map);
               map.setCenter(pos);
               
             },
             () => {
               handleLocationError(true, infoWindow, map.getCenter());
             }
           );
         } else {
          
           handleLocationError(false, infoWindow, map.getCenter());
         }
       });
     }
     
     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(
         browserHasGeolocation
           ? "Error: The Geolocation service failed."
           : "Error: Your browser doesn't support geolocation."
       );
       infoWindow.open(map);
     }
     
     window.initMap = initMap;
  
  
   function iniciarAutocompletar(){
  autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener("place_changed", function(){
  const place = autocomplete.getPlace();
  let coords = place.geometry.location
  
  console.log(place);
  console.log("Las coordenadas del lugar son: " + coords);
  map.setCenter();
  })
   }
   