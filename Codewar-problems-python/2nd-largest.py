# Find the 2nd largest integer in array If 
# the array has no 2nd largest integer then return 
# nil. Reject all non integers elements and
# then find the 2nd largest integer in array
def find_2nd_largest(arr):
    import re
    if all([isinstance(item, int) for item in arr]):
        arr.sort()
        return arr[len(arr)-2]
    else:
        strlist=[]
        Numslist=[]
        stringed=''.join(str(x) for x in arr)
        numsOnly=re.sub("[^0-9]", "", stringed)
        for i in numsOnly:
            strlist.append(i)
        for i in strlist:
            Numslist.append(int(i))
        return Numslist[len(Numslist)-2]
    
        

print(find_2nd_largest([1,'a','2',3,3,4,5,'b']))