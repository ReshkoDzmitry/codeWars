function findSmallestInt(args) {
      let a = args[0];
  
      for (let i = 0; i < args.length; i++) {
          if (args[i] < a) {
              a = args[i];
          }
      }
      return(a);
}

console.log(findSmallestInt([34, 15, 88, 2]));