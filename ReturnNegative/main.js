function makeNegative(num) {
    let oppos = 0;
      
      if (num > 0) {
          oppos = num - num * 2;
          return (oppos);
      }
      else {
          oppos = num;
          return (num);
        }
}

console.log(makeNegative(0.12));