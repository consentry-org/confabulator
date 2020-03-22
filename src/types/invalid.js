import Type from "./type";

const invalid = new Type({
  name: "required",
  base: true,
  finalizable: false,
  intermediary: false
});

export default invalid;
