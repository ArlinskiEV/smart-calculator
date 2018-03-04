class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.current = [{value: initialValue, priority: {value: 0, action: 'add'}}];
  }

  valueOf() {
    // pow
    let i = this.current.findIndex(item => item.priority.value === 2)
    while (i !== -1) {
      while (i < this.current.length - 1 && this.current[i + 1].priority.value === 2) {
        i += 1;
      }
      this.current.splice(i - 1, 2, {value: Math.pow(this.current[i - 1].value, this.current[i].value), priority: this.current[i-1].priority});
      i = this.current.findIndex(item => item.priority.value === 2);
    }

    // mul / dev
    i = this.current.findIndex(item => item.priority.value === 1)
    while (i !== -1) {
      this.current.splice(i - 1, 2, {value: this.current[i].priority.action === 'mul'
        ? (this.current[i - 1].value * this.current[i].value)
        : (this.current[i - 1].value / this.current[i].value), priority: this.current[i - 1].priority});
      i = this.current.findIndex(item => item.priority.value === 1);
    }

    // add / sub
    return this.current.reduce((prev, item) => item.priority.action === 'add'
      ? prev + item.value
      : prev - item.value, 0);
  }

  add(number) {
    // your implementation
    this.current.push({value: number, priority: {value: 0, action: 'add'}});
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.current.push({value: number, priority: {value: 0, action: 'sub'}});
    return this;
  }

  multiply(number) {
    // your implementation
    this.current.push({value: number, priority: {value: 1, action: 'mul'}});
    return this;
  }

  devide(number) {
    // your implementation
    this.current.push({value: number, priority: {value: 1, action: 'dev'}});
    return this;
  }

  pow(number) {
    // your implementation
    this.current.push({value: number, priority: {value: 2, action: 'exp'}});
    return this;
  }
}

module.exports = SmartCalculator;
