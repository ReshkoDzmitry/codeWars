function findNeedle() {
    const arr = ['hay', 'junk', 'hay', 'needle', 'hay', 'moreJunk', 'needle', 'randomJunk']
    for(let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if(arr[i] == 'needle') {
            return(i)
        }
        console.log(i);
    }

}

findNeedle()
//console.log(findNeedle(['hay', 'junk', 'hay', 'needle', 'hay', 'moreJunk', 'needle', 'randomJunk']));