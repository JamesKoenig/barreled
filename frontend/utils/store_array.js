class StoreArray {
  constructor(arr=[]) {
    this.arr = [...arr];
    this.duplicateCheck = new Set();
    arr.forEach( element => {
      this.duplicateCheck.add(this._getDuplicateKey(element))
    });
    this.last = arr.length -1;
  }

  sort() {
    this.arr.sort( (a,b) => a.time - b.time);
    return this;
  }

  _getDuplicateKey({time,id}) {
    return `${time}id${id}`;
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

  push(element) {
    if(this.duplicateCheck.has(this._getDuplicateKey(element))) {
      return this.arr;
    } else if(this.free_space() < 1) {
      this.double_size();
    }

    this.last += 1;
    this.arr[this.last] = element;

    this.sort();
    return this;
  }

  concat(otherArr) {
    const { length: otherLength } = otherArr;

    while(this.free_space() < otherLength) {
      this.double_size();
    }
    const start = this.last+1;
    for(let index = 0; index < otherLength; index++) {
      const element = otherArr[index]
      if(this.duplicateCheck.has(this._getDuplicateKey(element)))
        continue;
      this.last += 1;
      this.arr[this.last] = element;
    }
    this.sort();
    return this;
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
