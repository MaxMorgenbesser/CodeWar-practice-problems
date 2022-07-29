from re import L


def min_max(lst):
    sorted=lst.sort()
    numlist=[]
    numlist.append(lst[0])
    numlist.append(lst[len(lst)-1])
    return numlist
print(min_max([1,2,3,4,5]))

