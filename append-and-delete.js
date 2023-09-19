function appendAndDelete(s, t, k) {
    // Write your code here
    let check=0;
    let deletionLength=0;
    for(let i=0; i<Math.min(s.length,t.length); i++){
        if(s[i]!==t[i]){  
          break;
       }
       check++;
       }
       let operations=s.length+t.length-check-check;
       let deletion=s.length+t.length-check-check;
       
        if(k >= s.length + t.length || (k >= operations && (k -   
        operations)    % 2 === 0) || k >= deletion * 2){
             return "Yes"
       }
       else {
          return "No"
       }
        
    }
