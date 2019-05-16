import { Request, Response } from "express";

export const validate = (rules: any) => {
  return function(req: Request, res: Response, next: any) {
    for (let key in rules) {
      let validated = validateType(req.body[key], rules[key]);
      if (!validated) {
        return res.status(400).send(`${key} is not valid.`);
      }
    }
    next();
  };
};

const validateType = (value: any, rule: any) => {
  let isValid = true;
  if (!rule) {
    return true;
  }

  if (!value) {
    return false;
  }

  if (rule.type === "string") {
    isValid = typeof value === "string" && isValid;
  }

  if (rule.type === "number") {
    isValid = !isNaN(value) && isValid;
  }

  if (rule.type === "date") {
    isValid = value instanceof Date && !isNaN(<any>value) && isValid;
  }

  if (rule.regex) {
    isValid = rule.regex.test(value) && isValid;
  }

  if (rule.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rule.minLength) {
    isValid = value.length >= rule.minLength && isValid;
  }

  if (rule.maxLength) {
    isValid = value.length <= rule.maxLength && isValid;
  }

  return isValid;
};
