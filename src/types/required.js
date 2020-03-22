import Type from "./type";

const required = new Type({
  name: "required",
  base: true,
  finalizeable: false,
  intermediary: false
});

export default required;
