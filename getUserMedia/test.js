let videoFeed = document.querySelector('#camera-feed');
let stopButton = document.querySelector('#stop');
let startButton = document.querySelector('#start');

stopButton.addEventListener('click', () =>{
    let stream = videoFeed.srcObject;
    let tracks = stream.getTracks();
    console.log(tracks);
    for(let i=0 ; i <tracks.length; i++){
        console.log(tracks[i]);
        tracks[i].stop();
    }
    videoFeed.srcObject=null;
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
});