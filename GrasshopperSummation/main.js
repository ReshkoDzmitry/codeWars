var summation = function (num) {
    let out = 0;
    for (let i = 0; i <= num; i++) {
      out += i;
    }
    return (out);
}
console.log(summation(2));