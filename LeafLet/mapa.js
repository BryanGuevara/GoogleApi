let map = L.map('map').setView([13.736452, -89.7087065],10)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

document.getElementById('SelectLugar').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,16);
});

L.geolet({ GeolocationPosition: 'topleft' }).addTo(map);