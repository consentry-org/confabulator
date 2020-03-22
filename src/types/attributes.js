
// add new attribute types here
const ATTRIBUTE_NAMES = [
  "inherit"
];

const ATTR = new Proxy(
  Object.freeze(
    Object.assign(
      ...ATTRIBUTE_NAMES.map(name => ({
        [name]: name
      }))
    )
  ),
  {
    get: (obj, prop) => (
      obj[prop] || throw new Error(`Invalid type attribute '${prop}'`)
    )
  }
);

export default ATTR;
