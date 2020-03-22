import Type from "./type";

const runtime = new Type({
  name: "runtime",
  base: false,
  finalizeable: true,
  intermediary: false
});

export default runtime;
