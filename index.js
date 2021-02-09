// Add your functions here
function map(array, action) {
    let newArray = []
    array.forEach(element => {
        newArray.push(action(element))
    })
    return newArray
 }
    

 function reduce(sourceArray, action, start){
    let returnValue = (!!start) ? start : sourceArray[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < sourceArray.length; i++) {
      returnValue = action(sourceArray[i], returnValue)
    }
  
    return returnValue;
  }
  
