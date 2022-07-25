// Your challenge is to write a function named getSlope/get_slope/GetSlope that 
// calculates the slope of the line through two points.
function getSlope(p1, p2) {
    if (p1[0]===p2[0]&&p1[1]===p2[1]){
        return null
    }
    y=p1[1]-p2[1]
    x=p1[0]-p2[0]
    //console.log(x,y)
    slope =y/x
    //console.log(slope)
    if (slope == NaN || slope == -Infinity ){
        return null
    }else if (typeof(slope)==='number'||typeof(slope)===Number){
    return slope}
    // Return the slope of the line through p1 and p2
  }
console.log(getSlope([1,1],[1,1]))

