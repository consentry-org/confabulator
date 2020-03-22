import Type from "./type";

const required = new Type({
  name: "required",
  base: true,
  finalizable: false,
  intermediary: true
});

export default required;
