function encryption(s) {
    // Write your code here
     let rows=Math.floor(Math.sqrt(s.length))
     let colums=Math.ceil(Math.sqrt(s.length))
     if(rows * colums <s.length){
         rows++
     }
     let result='';
     let check=0
     for(let i=0; i<colums; i++){
         let temp=0+i;
         for(let j=0; j<rows; j++){
             if(temp>=s.length){}
             else{
        result=result+s[temp]
        temp=temp+colums;
             }
         }
         result=result+ ' ';
     }
     
     return result

}
