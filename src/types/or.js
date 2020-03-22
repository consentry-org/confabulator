import Type from "./type";

const or = new Type({
  name: "or",
  base: false,
  finalizeable: false,
  intermediary: true
});

export default or;
