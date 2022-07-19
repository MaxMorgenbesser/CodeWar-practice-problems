function sortArray(array) {
    for (let i =0; i < array.length; i++){
        if (array[i] % 2==0){
            array[i].sort((a,b)=>a-b)
        }
    }return array
  }


  console.log(sortArray([5, 8, 6, 3, 4]))