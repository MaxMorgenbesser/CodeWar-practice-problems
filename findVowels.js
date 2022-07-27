// We want to know the index of the 
// vowels in a given word, for example, there are two vowels]
//  in the word super (the second and fourth letters).

function vowelIndices(word){
    vowels='aeiouy'
    upperVowels='AEIOUY'
    indArr=[]
    for (let i=0; i<word.length;i++){
        if (vowels.includes(word[i]) ||upperVowels.includes(word[i]) ){
            indArr.push(i+1)
        }
    }
    return indArr
  }
  console.log(vowelIndices('super'))