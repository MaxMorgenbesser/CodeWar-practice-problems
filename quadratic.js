function solveQuadratic(a, b, c) {
    arr =[]
    x1=(-b+((b**2)-4*a*c)**.5)/(2*a)
    x2=(-b-((b**2)-4*a*c)**.5)/(2*a)
    if (typeof(x1) !== "number" &&typeof(x2) !== "number"){
    arr.push(x1)
    arr.push(x2)
    return arr
    } else {
        return undefined
    }
  }

 console.log(solveQuadratic(1,2,5))