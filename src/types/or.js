import Type from "./type";
import ATTR from "./attributes";

const or = new Type({
  name: "or",
  base: false,
  finalizable: ATTR.inherit,
  intermediary: true
});

export default or;
