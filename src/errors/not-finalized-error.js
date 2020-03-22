import ValidationError from "./validation-error";

export default class NotFinalizedError extends ValidationError {
  get name() {
    return "Not Finalized Error";
  }

  get details() {
    // TODO
    return null;
  }
}
