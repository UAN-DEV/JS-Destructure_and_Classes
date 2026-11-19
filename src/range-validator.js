"use strict";

export class RangeValidator {
  #from;
  #to;

  constructor(from = 0, to = Infinity) {
    if (typeof from !== "number" || Number.isNaN(from)) {
      throw new TypeError("The minimun value of the range must be a number!");
    }
    if (typeof to !== "number" || Number.isNaN(to)) {
      throw new TypeError("The maximun value of the range must be a number!");
    }
    if (from > to) {
      throw new RangeError("The 'from' value must be a greated of 'to'");
    }

    this.#from = from;
    this.#to = to;
  }

  get from() {
    return this.#from;
  }

  set from(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError("The minimun value of the range must be a number!");
    }
    if (value > this.#to) {
      throw new RangeError("The 'from' value must be a greated of 'to'");
    }
    this.#from = value;
  }

  get to() {
    return this.#to;
  }

  set to(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError("The value must be a number!");
    }
    if (value < this.#from) {
      throw new RangeError("The 'from' value must be a greated of 'to'");
    }
    this.#to = value;
  }

  get range() {
    return [this.#from, this.#to];
  }

  isValid(number) {
    return (
      typeof number === "number" &&
      !Number.isNaN(number) &&
      number >= this.#from &&
      number <= this.#to
    );
  }
}
