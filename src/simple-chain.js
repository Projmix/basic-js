const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array : [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push('( '+`${value}`+' )');
    return this;
  },

  removeLink(position) {
    if ( (position < 1) || (typeof position !== 'number')) {
      this.array = [];
      throw new Error();
    }
    this.array.splice(position - 1 , 1);
    return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    const arr = this.array.join('~~');
    this.array = [];
    return arr;
  }
};


module.exports = chainMaker;