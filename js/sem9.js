import andrei from "./andrei.js";


const ages = [0,1,2,3,4];

andrei.each(ages, function(age, index) {
    console.log(`El elemento ${age} se encunetra en la posición ${index}`);
});

console.log(andrei.cocos(ages));

console.log(andrei.mean(ages,age => age < 4));

console.log(andrei.mean(ages));

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
