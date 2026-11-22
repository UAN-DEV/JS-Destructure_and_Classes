"use strict";

export class RangeValidator {
  #from;
  #to;

  constructor(from = 0, to = Infinity) {
    this.to = to;
    this.from = from;
  }

  get from() {return this.#from}
  set from(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError("The minimum value of the range must be a number!");
    }
    if (value > this.#to) {
      throw new RangeError("The 'from' value cannot be greater than 'to'!");
    }
    this.#from = value;
  }

  get to() {return this.#to}
  set to(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError("The maximum value of the range must be a number!");
    }
    if (value < this.#from) {
      throw new RangeError("The 'to' value cannot be less than 'from'!");
    }
    this.#to = value;
  }

  get range() {return [this.#from, this.#to]}

  isValid(num) {return typeof num === "number" && !Number.isNaN(num) && num >= this.#from && num <= this.#to};
}
