var andrei = [];

var i = 0;

andrei.each = (array,callback) => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
        callback(array[i],i);
    }
}

andrei.cocos = (array) => {
    const narr = [];
    for(let i = 0; i < array.length; i++){
        narr[i] = "cocos "+array[i];
    }
    return narr;
}

andrei.mean = (array, callback = null) =>{
    var mean = 0;
    var k = 0;
    for(let i = 0; i < array.length; i++ ){
        if(callback != null){
            if(callback(array[i],i) === true){
                mean += array[i];
                k++;
            }
        }else{
            mean += array[i];
            k++;
        }
    }

    return mean/k;
}

export default andrei;