import { NotFinalizedError, IntermediateTypeError } from "./errors";
import ConfigObject from "./config-objects/config-object";

const parser = {
  validate(obj, { finalized = false, path = [] } = {}) {
    const errors = [];

    Object.entries(obj).forEach(([key, child]) => {
      if(child instanceof ConfigObject) {
        if(finalized) {
          if(child.isIntermediate) {
            errors.push(
              new IntermediateTypeError({
                key,
                path,
                obj: child
              })
            );
          }
          if(!child.allowedInFinal) {
            errors.push(
              new NotFinalizedError({
                key,
                path,
                obj: child
              })
            );
          }
        }
      } else {
        errors.push(
          ...this.validate(obj, {
            finalized,
            path: [...path, key]
          })
        );
      }
    });

    return errors;
  }

};

export default parser;
