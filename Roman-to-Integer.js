var romanToInt = function(s) {
   let x=0
   let res=0
while (x<s.length){
    //console.log(s[x])
    if(s[x]+s[x+1]=='IV'){
        res+=4
        x+=2
    }else if(s[x]+s[x+1]=='IX'){
        res+=9
        x+=2
    }else if(s[x]+s[x+1]=='XL'){
        res+=40
        x+=2
    }else if(s[x]+s[x+1]=='XC'){
        res+=90
        x+=2
    }else if(s[x]+s[x+1]=='CD'){
        res +=400
        x+=2
    }else if(s[x]+s[x+1]=='CM'){
        res+=900
        x+=2
    }else if(s[x]=='I'){
        res+=1
        x+=1
    }else if(s[x]=='V'){
        res+=5
        x+=1
    }else if(s[x]=='X'){
        res+=10
        x+=1
    }else if(s[x]=='L'){
        res+=50
        x+=1
    }else if(s[x]=='C'){
        res+=100
        x+=1
    }else if(s[x]=='D'){
        res+=500
        x+=1
    }else if(s[x]=='M'){
        res+=1000
        x+=1
    }
    
};
return res

}
console.log(romanToInt('XXVII'))