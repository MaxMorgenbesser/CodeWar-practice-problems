// A phrase is a palindrome if, after
//  converting all uppercase letters into lowercase letters 
//  and removing all non-alphanumeric characters, it reads 
//  the same forward and backward. Alphanumeric characters 
//  include letters and numbers.



var isPalindrome = function(s) {
    split=s.split('')
    filter=split.filter(i=> (/[a-z]/.test(i)))
    revarr=filter.reverse()
    console.log(revarr)
    console.log(filter)
    if (revarr===filter){
        return true
    }else{
        return false
    }
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))

