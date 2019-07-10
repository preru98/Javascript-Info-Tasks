returnPos();

let attribution='&copy ; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributers';
let tileURL='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let myMap = L.map('mapID').setView([51.505, -0.09], 13);
let tiles=L.tileLayer(tileURL, { attribution });

tiles.addTo(myMap);
async function returnPos(){
    const response= await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data=await response.json();
    console.log(data);
    const{longitude,latitude}=data;
    document.getElementById('Longitude').textContent=longitude;
    document.getElementById('Latitude').textContent=latitude;
}

//setInterval(returnPos,1500);