let i=0;
function updateCounter(){
    console.log(i);
    i++;
    if(i==10){
        console.log('done');
        return;
    }
    setTimeout(updateCounter,1000);
}

updateCounter();