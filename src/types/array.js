import Type from "./type";
import ATTR from "./attributes";

const array = new Type({
  name: "array",
  base: false,
  finalizable: ATTR.inherit,
  intermediary: false
});

export default array;
