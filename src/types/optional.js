import Type from "./type";

const optional = new Type({
  name: "required",
  base: true,
  finalizable: true,
  intermediary: true
});

export default optional;
