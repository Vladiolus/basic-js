module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depth = 0;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          let temp = this.calculateDepth(arr[i]);
          if (temp > depth) depth = temp; 
        }
      }
      return depth+1;
    }
};