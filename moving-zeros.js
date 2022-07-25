// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
    //console.log(arr.length)
    str=arr.join('')
    
    //console.log(str.length)
    while(arr.includes('0')){
    arr=arr.replace('0','')
    
}str=arr.join('')
rep=str
    split=rep.split('')
    
     for (let i=0;i<split.length;i++){
        if (Number.isInteger(Number(split[i])))
        split[i]=Number(split[i])
     }for (let i=0;i<split.length;i++){
       if (!Number.isInteger(Number(split[i]))){
        
       }
     }
      return split ;
    }
console.log(moveZeros([false, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0 ]));
