function countSheeps(arrayOfSheep) {
let out = 0;
    
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i] === true) {
            out++;
        }   
    }
    
return (out);
}

console.log(countSheeps(
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    )
);
