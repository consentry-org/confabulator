import Type from "./type";

const optional = new Type({
  name: "required",
  base: true,
  finalizeable: true,
  intermediary: false
});

export default optional;
