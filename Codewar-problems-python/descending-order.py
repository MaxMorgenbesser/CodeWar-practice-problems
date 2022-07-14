
# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

# Examples:

# Input: 42145 Output: 54421

# Input: 145263 Output: 654321

# Input: 123456789 Output: 987654321

def descending_order(num):
    # Bust a move right here
    nlist=[]
    i=0
    num=str(num)
    while i in range(0,len(num)):
        nlist.append(num[i])
        i+=1
    nlist.sort()
    nlist.reverse()
    i=0
    string=''
    i=0
    for i in range(0,len(nlist)):
        string=string+nlist[i]
        i+=1
    return int(string)

    