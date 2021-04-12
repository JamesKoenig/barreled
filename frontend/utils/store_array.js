class StoreArray {
  constructor(arr=[], sortFn) {
    this.arr = arr;
    this.last = arr.length -1;
    if(sortFn) {
      this.sort = () => this.arr.sort(sortFn);
    }
  }

  free_space() {
    const { arr: { length }, last } = this;
    return length-(last+1);
  }

  double_size() {
    const { arr } = this;
    arr.length *= 2;
    return this;
  }

  sort() {
    return this.arr.sort();
  }

  add(thing) {
    if(Array.isArray(thing)) {
      return concat(thing);
    } else {
      return concat([thing]);
    }
  }

  push(element) {
    if(this.free_space() < 1) {
      this.double_size();
    }
    this.last += 1;
    this.arr[this.last] = element;

    return this.sort();
  }

  concat(otherArr) {
    const { length: otherLength } = otherArr;
    while(this.free_space() < otherLength) {
      this.double_size();
    }
    const start = this.last+1;
    for(let index = 0; index < otherLength; index++) {
      this.arr[start+index] = otherArr[index];
    }
    this.last += otherLength;
    return this.sort();
  }

  map( fn=( x => x ) ) {
    let res_arr = new Array(this.last+1);
    for(let index = 0; index <= this.last; index++) {
      res_arr[index] = fn(this.arr[index])
    }
    return res_arr;
  }

  forEach( fn ) {
    for(let index = 0; index <= this.last; index++) {
      fn(this.arr[index]);
    }
  }
}

export default StoreArray;
