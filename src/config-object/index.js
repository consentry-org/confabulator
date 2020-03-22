import ConfigObject, { TYPES } from "./config-object";

export const required = ConfigObject.make({ type: TYPES.required });
export const optional = ConfigObject.make({ type: TYPES.optional });
export const or = ConfigObject.make({ type: TYPES.or });
export const string = ConfigObject.make({ type: TYPES.string });
export const number = ConfigObject.make({ type: TYPES.number });
export const array = ConfigObject.make({ type: TYPES.array });
