import {
  required,
  optional,
  or,
  string,
  number,
  array,
  invalid
} from "../types";

const CUSTOM_PRIMITIVE_TYPES = Object.freeze({
  ARRAY: "array"
});

// map of name -> type
export const TYPES = Object.freeze(
  Object.assign(...([
    required,
    optional,
    or,
    string,
    number,
    array,
    invalid
  ].map(type => ({
    [type.name]: type
  }))))
);

export default class ConfigObject {
  constructor({
    type,
    chainedType,
    overrides,
    value
  } = {}) {
    this.explicitType = type;
    this.chainedType = chainedType;
    this.overrides = overrides;
    this.value = value;

    // immutable
    Object.freeze(this);
  }

  get type() {
    if(!this.value) {
      if(!this.explicitType) {
        throw new Error("Object of no type and no value encountered");
      }
      return this.explicitType;
    }
    if(typeof(value) === "object") {
      if(Array.isArray(this.value)) {
        return CUSTOM_PRIMITIVE_TYPES.ARRAY;
      }
      throw new Error("Encountered a non-leaf type in a config object");
    }
    return typeof(value);
  }

  static make(name, chained) {
    const type = TYPES[name] || TYPES.invalid;
    return new Proxy(new ConfigObject({
      ...(chained || {}),
      value: +type === +TYPES.invalid
        ? name
        : (chained && chained.value),
      type
    }), ConfigObject._handlers);
  }

  static get _handlers() {
    return {
      get: (obj, prop) => ConfigObject.make(prop, obj),

      apply: (target, obj, args) => { // eslint-disable-line no-unused-vars
        // TODO: implement
      }
    };
  }
}

