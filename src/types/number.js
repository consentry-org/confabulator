import Type from "./type";

const number = new Type({
  name: "number",
  base: false,
  finalizeable: false,
  intermediary: false
});

export default number;
