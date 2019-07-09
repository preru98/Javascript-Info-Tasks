async function returnPos(){
    const response= await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data=await response.json();
    console.log(data);
    const{longitude,latitude}=data;
    document.getElementById('Longitude').textContent=longitude;
    document.getElementById('Latitude').textContent=latitude;
}
returnPos();