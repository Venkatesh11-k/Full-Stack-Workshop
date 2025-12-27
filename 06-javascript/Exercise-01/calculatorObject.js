const calc = {
  result: 0,

  add: function (n) {
    this.result += n;
    return this;
  },

  subtract: function (n) {
    this.result -= n;
    return this;
  },

  multiply: function (n) {
    this.result *= n;
    return this;
  },

  divide: function (n) {
    this.result /= n;
    return this;
  },

  getResult: function () {
    return this.result;
  },

  reset: function () {
    this.result = 0;
    return this;
  }
};

const result = calc
  .reset()
  .add(10)
  .subtract(2)
  .multiply(3)
  .divide(4)
  .getResult();

console.log(result); // 6
