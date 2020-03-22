import Type from "./type";

const string = new Type({
  name: "string",
  base: false,
  finalizeable: false,
  intermediary: false
});

export default string;
