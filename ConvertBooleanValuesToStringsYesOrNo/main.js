function boolToWord( bool ){
    if (bool) {
      return ('Yes');
    }
    else {
      return ('No');
    }
}

console.log(boolToWord(true));