
const requiredParam = (name, param) => {
  if(typeof(param) === "undefined") {
    throw new Error(`'${name}' is required to construct a validation error`);
  }
};

export default class ValidationError {
  constructor({ key, path, obj } = {}) {
    requiredParam("key", key);
    requiredParam("path", path);
    requiredParam("obj", obj);

    if(!Array.isArray(path)) {
      throw new Error("'path' must be an array of keys");
    }

    this.key = key;
    this.path = path;
    this.obj = obj;
  }
}
