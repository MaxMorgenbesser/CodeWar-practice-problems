function order(words){
  arr=[]
    words=words.split(' ')
    i=0
    nums=['1','2','3','4','5','6','7','8','9']
    for (let i=0; i < words.length; i++ ){
   for(let x=0;x<words[i].length; x++){
    if (nums.include(words[i][x])){
      x=Number(words[i][x])
      console.log(x)
    }
   }
    }


return arr}


order('is2 Thi1s T4est 3a')