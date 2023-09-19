function extraLongFactorials(n) {
    // Write your code here
    let fact=BigInt(1);
    for(let i=n ;i>1; i--){
       fact *= BigInt(i);
        
    }
    console.log(fact.toString());
    return fact.toString();
}
