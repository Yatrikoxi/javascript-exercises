const sumAll = function(x,y) {
    let sum = 0;
     if (x < 0 || y < 0) {
       return "ERROR"
     } else if (typeof y !== "number" || typeof x !== "number") {
         return "ERROR"
     }  else if (x > y) {
         for (let i = x; i >= y; --i)
        sum += i;
     }  else if (y > x) {
         for (let i = x; i <= y;i++)
         sum +=i;
     } 
    return sum
}

// const sumAll = function(x,y) {
//     let sum = 0;
//      if (x < 0 || y < 0) {
//          return "ERROR"
//     }    else if (x > y) {
//          for (let i = x; i >= y; --i)
//          sum += i;
//     }   else if (y > x) {
//          for (let i = x; i <= y;i++)
//          sum +=i;
//     }  else if (typeof x != Number || typeof y != Number 
//         || x === String || y === String){
//             return "ERROR"
//     }  console.log(sum)
//     return sum
// }

// const sumAll = function(x,y) {
//        let sum = 0;
//        if (x < 0 || y < 0) {
//         return "ERROR"
//        } else if (x == "" || y == ""){
//         return "ERROR"
//        }
//        for (let i = x; i >= y;i++) {
//            sum += i;
//        } if (y > x){
//         for (let i = y; i >= x; --i){
//             sum += i;
//         }
//        }
//        return sum
//     }
// Do not edit below this line
module.exports = sumAll;
