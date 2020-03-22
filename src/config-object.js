const CUSTOM_PRIMITIVE_TYPES = {
  ARRAY: "array"
};

class ConfigObject {
  constructor({ type, overrides, value } = {}) {
    this.explicitType = type;
    this.overrides = overrides;
    this.value = value;
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
}

const types = [
  {
    name: "required",
    base: true,
    finalizable: false,
    intermediary: false
  },
  {
    name: "optional",
    base: true,
    finalizable: true,
    intermediary: false
  },
  {
    name: "string",
    base: false,
    intermediary: false
  },
  {
    name: "number",
    base: false,
    intermediary: false
  }
];

const handlers = {
  get: (obj, prop) => {

  }
};

const required = new Proxy(new ConfigObject({ }), handlers);
