let videoFeed = document.querySelector('#camera-feed');
let stopButton = document.querySelector('#stop');
let captureButton = document.querySelector('#capture');
let combineButton = document.querySelector('#merge');
let startButton = document.querySelector('#start');
let canvas = document.createElement('canvas');
let imageShow = document.getElementById('res-image');
let borderImage = document.getElementById('border');
let photoboothDocument= document.getElementById('photobooth');


stopButton.addEventListener('click', () =>{
    let stream = videoFeed.srcObject;
    let tracks = stream.getTracks();
    console.log(tracks);
    for(let i=0 ; i <tracks.length; i++){
        console.log(tracks[i]);
        tracks[i].stop();
    }
    videoFeed.srcObject=null;
    captureButton.disabled=true;
});

startButton.addEventListener('click', () =>{
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            videoFeed.srcObject = stream;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    captureButton.disabled=false;
});

captureButton.addEventListener('click', () => {
    console.log("In here");
    canvas.width = videoFeed.videoWidth;
    canvas.height = videoFeed.videoHeight;
    canvas.getContext('2d').drawImage(videoFeed, 0, 0);
    imageShow.src = canvas.toDataURL('image/webp');
    combineButton.disabled=false;
});

combineButton.addEventListener('click', () => {
    console.log("In here");
    console.log(borderImage);
    canvas.style.width =  500;
    canvas.style.height = 375;
    console.log(canvas);
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    canvas.getContext('2d').drawImage(imageShow, 0, 0, 500, 375, 0, 0, 500, 375);
    // canvas.getContext('2d').globalAlpha = 0.5;
    canvas.getContext('2d').drawImage(borderImage, 0, 0, 500, 375, 0, 0, 500, 375);
    photoboothDocument.src = canvas.toDataURL('image/webp');
});

