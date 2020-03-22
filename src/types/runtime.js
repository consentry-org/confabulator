import Type from "./type";

const runtime = new Type({
  name: "runtime",
  base: false,
  finalizable: true,
  intermediary: false
});

export default runtime;
