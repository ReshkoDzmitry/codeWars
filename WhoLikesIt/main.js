function likes(names) {
    
    if(names.length === 0) {
        console.log('no one likes this');
        return(`no one likes this`);
    }
    if(names.length === 1) {
            console.log(`${names[0]} likes this`);
            return(`${names[0]} likes this`);
    }
    else if(names.length === 2) {
            console.log(`${names[0]} and ${names[1]} like this`);
            return(`${names[0]} and ${names[1]} like this`);
    }
    else if(names.length === 3) {
            console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
            return(`${names[0]}, ${names[1]} and ${names[2]} like this`);
    }
    else if(names.length >= 4) {
            console.log("${names[0]}, ${names[1]} and ${names.length - 2} others like this");
            return(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
    }
    
}

likes(['Alex1','Alex2','Alex3','Alex4',]);