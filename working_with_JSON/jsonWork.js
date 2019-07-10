// returnPos();
const attribution='&copy ; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributers';
const tileURL='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var Icon = L.icon({
    iconUrl: '200px-International_Space_Station.svg.png',
    iconSize: [70, 52],
    iconAnchor: [35, 26],
});

const myMap = L.map('mapID').setView([51.505, -0.09], 2);
const marker=L.marker([0,0],{icon:Icon}).addTo(myMap);
const tiles=L.tileLayer(tileURL, { attribution });
tiles.addTo(myMap);
async function returnPos(){
    const response= await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data=await response.json();
    console.log(data);
    const{longitude,latitude}=data;
    marker.setLatLng([latitude,longitude]);
    document.getElementById('Longitude').textContent=longitude;
    document.getElementById('Latitude').textContent=latitude;
}

setInterval(returnPos,1000);