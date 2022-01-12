class StoreArray {
  constructor(arg=[]) {
    if(Array.isArray(arg)) {
      this.arr = [...arg];
      this.duplicateCheck = new Set();
      this.arr.forEach( element => {
        this.duplicateCheck.add(this._getDuplicateKey(element));
      });
      this.last = this.arr.length -1;
    } else {
      /* assume the arg is a StoreArray instance */
      const { arr, last, duplicateCheck } = arg;
      this.arr = [...arr];
      this.duplicateCheck = new Set(duplicateCheck);
      this.last = last;
    }
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

  push(element) {
    if(this.duplicateCheck.has(this._getDuplicateKey(element))) {
      return this.arr;
    }

    this.last += 1;
    this.arr[this.last] = element;
    this.duplicateCheck.add(this._getDuplicateKey(element));

    this.sort();
    return this;
  }

  concat(otherArr) {
    const filteredArr = otherArr.filter( feedItem =>
      !this.duplicateCheck.has(this._getDuplicateKey(feedItem))
    );

    const { length: otherLength } = filteredArr;

    if(otherLength === 0) return this;

    this.arr.length += (otherLength - this.free_space());

    filteredArr.forEach( element => {
      this.last += 1;
      this.arr[this.last] = element;
      this.duplicateCheck.add(this._getDuplicateKey(element));
    });
    this.sort();
    return this;
  }

  map( fn=( x => x ) ) {
    let res_arr = new Array(this.last+1);
    for(let index = 0; index <= this.last; index++) {
      res_arr[index] = fn(this.arr[index]);
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
