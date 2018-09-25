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
    newArr.sort(this.compare)
    indices.sort((a,b)=>{return a-b})
    for(let k = 0; k<indices.length; k++){
        this.arr[indices[k]] = newArr[k]
  }
  
  }

  setComparator(compareFunction) {
     this.compare = compareFunction}
  }


module.exports = Sorter;