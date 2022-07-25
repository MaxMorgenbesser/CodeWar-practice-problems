function disemvowel(str) {
    let newStr=''
    strArr=str.split('')
    vowels='aeiou'
    i=0
    while  (i<strArr.length){
        if (vowels.includes(strArr[i])){
            strArr.splice(i)
            
        }i++

    }console.log(strArr)
    for (let x=0; x<strArr.length; x++){
    newStr=newStr+strArr[x]
    }
   
    return newStr ;
  }
  console.log(disemvowel('Who are you'))