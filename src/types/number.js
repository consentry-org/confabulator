import Type from "./type";
import ATTR from "./attributes";

const number = new Type({
  name: "number",
  base: false,
  finalizable: ATTR.inherit,
  intermediary: false
});

export default number;
