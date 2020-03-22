import Type from "./type";

const invalid = new Type({
  name: "required",
  base: true,
  finalizeable: false,
  intermediary: false
});

export default invalid;
