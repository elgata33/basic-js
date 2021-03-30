const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.arr = []
      throw new Error()
    }
    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let answer  = this.arr.join("~~")
    this.arr = []
    return answer
  }
};

module.exports = chainMaker;
