function myDelayFunc(ms){
    return myPromiseDelay=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('runs after '+ ms+ ' milliseconds');
            },ms);
     });
};
myDelayFunc(4000).then(alert);
