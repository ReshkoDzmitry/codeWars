function solution(str){
    let arr = str.split('');
      arr = arr.reverse();
      arr = arr.join('');
      return (arr);
}

console.log(solution("world"));