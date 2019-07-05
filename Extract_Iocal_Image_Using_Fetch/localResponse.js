fetch("doggo.jpg")
    .then(function(response){
        console.log(response);
        return response.blob();
    }).then(function(getResponse){
        console.log(getResponse);
        document.querySelector('#Image').src=URL.createObjectURL(getResponse);
    })