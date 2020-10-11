'use strict';

var _ = [];
var i = 0;

_.contains = (arr,value,fromIndex = null) => {
    var ret = false;
    if(fromIndex != null){
        for(let i = 0; i < arr[fromIndex].length; i++){
            if(arr[fromIndex][i] == value)
                ret = true;
        }
    }else{
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == value)
                ret = true;        
        }
    }
    return ret;
}

_.pluck = (arr,key) => {
    var narr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i][key] != undefined){
            narr.push(arr[i][key]);
        }
    }
    return narr;
}

_.without = (arr,...rest) => {
    var args = rest;
    var narr = [];
    for(var i = 0; i < arr.length; i++){
        var pivot = false;
        for(var j = 0; j < args.length; j++){
            if(arr[i] == args[j])
                pivot = true;
        }
        if(!pivot)
            narr.push(arr[i]);
    }
    return narr;
}


export default _;