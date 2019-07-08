
async function setImage(){
    const response=await fetch('doggo.jpg');
    const myImage=await response.blob();
    document.getElementById('Image').src=URL.createObjectURL(myImage);
}

setImage().catch(alert);