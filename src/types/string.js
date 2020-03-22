import Type from "./type";
import ATTR from "./attributes";

const string = new Type({
  name: "string",
  base: false,
  finalizable: ATTR.inherit,
  intermediary: false
});

export default string;
