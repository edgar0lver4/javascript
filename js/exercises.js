import _ from './lib.js';

const arr = {
    Foreach: (array,callback) => {
        for(let i = 0; i < array.length; i++){
            callback(array[i], i);
        }  
    },
    Filter: (array,callback) => {
        var narr = [];
        for(let i = 0;i < array.length; i++){
            if(callback(array[i], i) === true){
                narr.push(array[i]);
            }
        }
        return narr;
    },
    Map: (array,callback) => {
        var narr = [];
        for(let i = 0; i < array.length; i++){
            narr.push(callback(array[i],i));
        }
        return narr;
    },
    Find: (array,callback) => {
        var i = 0;
        var ret = 0;
        var exit = false;
        do{
            if(callback(array[i],i) === true){
                ret = array[i];
                exit = true;
            }
            i++;
        }while(!exit);

        return ret;
    },
    FindIndex: (array,callback) => {
        var i = 0;
        var ret = 0;
        var exit = false;
        do{
            if(callback(array[i],i) === true){
                ret = i;
                exit = true;
            }
            i++;
        }while(!exit);

        return ret;
    }
};



var ages = [3,2,3,4,5,6,6,9,12,34,2];
var agesa=[
    [1,2,3,4,5,6,6,7,8],
    [1,4,5,6,4,2,3,4,7]
]
const useers = [
    {
        name:'Edgar Olvera',
        user:'eolvera',
        mail:'eolvera@gmail.com'
    },
    {
        name:'Ketherine Villa',
        user:'kvilla',
        mail:'kvilla@gmail.com'
    },
    {
        user:'admin',
        mail:'admin@admin.com'
    }
]

arr.Foreach(ages,(ages) => { 
    console.log(ages*2); 
});

var fages = arr.Filter(ages, age => age >= 5);
var nages = arr.Map(ages, age => age*2);
var filags= arr.Find(ages, age => age >= 7);
var fixags= arr.FindIndex(ages, age => age >= 7);

console.log(_.contains(ages,3));

console.log(_.contains(agesa,9,1))

console.log(_.without(ages,1,3,2));

console.log(_.pluck(useers,'name'));

console.log(fages);

console.log(nages);

console.log("Primer valor:"+filags);

console.log("Índice que cumple:"+fixags + " Valor en arreglo:" + ages[fixags]);