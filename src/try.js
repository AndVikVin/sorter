// const sorter = new Object();
// console.log(sorter);
// sorter.arr = [];
// sorter.add = (a)=>{sorter.arr.push(a)};
// // sorter.add(1);
// // sorter.add(2);
// // sorter.add(5);
// sorter.add(6);
// console.log(sorter);
// sorter.length = sorter.arr.length;
// console.log(sorter.length);
// sorter.toArray = sorter.arr;
// console.log(sorter.toArray);
// sorter.sort = (someArr)=>{
//     for(i = 0; i<sorter.arr.length; i++){
//         if(i === someArr[0]){
//             let a = sorter.arr[i]
//             for(k = 0; k<sorter.arr.length; k++){
//                 if(k === someArr[1]){
//                     let b = sorter.arr[k]
//                     console.log(a,b)
//                     let change
//                     if (a-b > 0){
//                         change = sorter.arr[i]
//                         sorter.arr[i]=sorter.arr[k]
//                         sorter.arr[k]=change
//                     } else {change = sorter.arr[k]
//                         sorter.arr[k]=sorter.arr[i]
//                         sorter.arr[i]=change}
                
//                 }
//             }
//         }
//     } 
// }

// sorter.sort([0])
// console.log(sorter.toArray);
// // sorter.setComparator = (compareFunction)=>{ return sorter.arr.sort(compareFunction)};

// // const reverseCompareFunction = (left, right) => right - left;
// // sorter.setComparator(reverseCompareFunction)
// // console.log(sorter.toArray)
class Sorter {
    constructor() {
     this.arr = [];         
     this.compare = (a,b)=>{return a-b};
    }
  
    add(element) {
      this.arr.push(element);
    }
  
    at(index) {
      return this.arr[index];
    }
  
    get length() {
     return this.arr.length;
    }
  
    toArray() {
      return this.arr;
    }
  
    sort(indices) {
        let newArr = this.arr.map((arrElem)=>{
            for(let i = 0; i<indices.length;i++){
                if(indices[i]===this.arr.indexOf(arrElem)){
                    return arrElem
                }
            }
        })
        console.log(newArr);
        newArr.sort(compare)
        indices.sort(compare)
        console.log(newArr)
        for(let k = 0; k<indices.length; k++){
            this.arr[indices[k]] = newArr[k]
        }
        
        // for(let ind = 0; ind<= indices.length - 1; ind++){
        //     for(let i = 0; i<this.arr.length; i++){
        //         if(i === indices[ind]){
        //             let a = this.arr[i]
        //             for(let k = 0; k<this.arr.length; k++){
        //                 if(k === indices[ind+1]){
        //                     let b = this.arr[k]
        //                     let change
        //                     if (a-b > 0){
        //                         change = this.arr[i]
        //                         this.arr[i]=this.arr[k]
        //                         this.arr[k]=change
        //                     } else {change = this.arr[k]
        //                       this.arr[k]=this.arr[i]
        //                       this.arr[i]=change}
                        
        //                 }
        //             }
        //         }
        //     } 
        // }
        
    
    }
  
    setComparator(compareFunction) {
       return compare = compareFunction}
    }
let sorter = new Sorter();

console.log(sorter.toArray());
let comparet = (left, right) => left.age - right.age;


sorter.add({age:18})
sorter.add({age:20})
sorter.add({age:16})
console.log(sorter.toArray());
sorter.setComparator(comparet)
sorter.sort([1,2]);
console.log(sorter.toArray());


