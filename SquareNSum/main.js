function squareSum(numbers){
    let out = 0;
  
      for (let i = 0; i < numbers.length; i++) {
          out += numbers[i]*numbers[i];
    }
    return (out);
}

console.log(squareSum([1,2,2]));
