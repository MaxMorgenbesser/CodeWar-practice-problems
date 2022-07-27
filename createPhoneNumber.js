// Write a function that accepts an 
//array of 10 integers (between 0 and 9), that returns a string of those numbers in the 
// form of a phone number.

function createPhoneNumber(numbers){
nums = numbers.join('')
str=''
for (let i =0; i<=9;i++){
   if (i==0){
    str+='('+nums[i]
   }else if (i==3){
    str+= ') '+nums[i]
   }else if(i==6){
    str+='-'+nums[i]
   }
   else{
    str+=nums[i]
   }
}
return str
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))