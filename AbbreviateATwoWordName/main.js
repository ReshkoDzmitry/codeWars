function abbrevName(name){
    return (name.toUpperCase().match(/\b\w/g).join('.'));
}

console.log(abbrevName("Sdssdsd jmhjk"));