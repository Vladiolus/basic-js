const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position != "number" || position < 1 || position > this.result.length)
      {
        this.result = [];
        throw new Error();
      }
    this.result.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let chain = "";
    for (let i = 0; i < this.result.length; i++)
      {
        chain += "( " + this.result[i] + " )~~";
      }
    this.result = [];
    return chain.slice(0, -2);
  }
};

module.exports = chainMaker;
