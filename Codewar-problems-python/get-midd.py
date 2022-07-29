def get_middle(s):
    import math
    if (len(s)+1)%2==0:
        ind=int(len(s)/2)
        return s[ind]
    else:
       # print(float(len(s))/2)
        fl=(float(len(s))/2)
        fl=round(fl)
        sl=((float((len(s)-1)/2)))
        #print(sl,fl)
        return s[int(sl)]+s[int(fl)]
print(get_middle("test"))