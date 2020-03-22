import Type from "./type";
import ATTR from "./attributes";

const lambda = new Type({
  name: "code",
  base: false,
  finalizeable: ATTR.inherit,
  intermediary: true
});

export default lambda;
