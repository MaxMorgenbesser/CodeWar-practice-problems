def filter_list(l):
    integers = [elm for elm in l if isinstance(elm, int)]
    return integers
print(filter_list(['1','qwd',12]))