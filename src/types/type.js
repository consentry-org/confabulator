import isRequired from "is-required";

export default class Type {
  constructor({
    name = isRequired("name"),
    base,
    finalizable,
    intermediary
  }) {
    this.name = name;
    this.base = base;
    this.finalizable = finalizable;
    this.intermediary = intermediary;

    // types are immutable singletons
    Object.freeze(this);
  }
}
