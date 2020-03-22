import ValidationError from "./validation-error";

export default class IntermediateTypeError extends ValidationError {
  get name() {
    return "Intermediate Type Error";
  }

  get details() {
    // TODO
    return null;
  }
}
