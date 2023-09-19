function squares(a, b) {
    // Write your code here
    let number=0;
  for(let i=a; i<=b;i++){
      let value=Math.sqrt(i)
      if(Number.isInteger(value) ){
          number++;
      }
  }
  console.log(number)
}

//Here is the optimized version 
function squares(a, b) {
    const lowerBound = Math.ceil(Math.sqrt(a));
    const upperBound = Math.floor(Math.sqrt(b));
    
    return upperBound - lowerBound + 1;
}
