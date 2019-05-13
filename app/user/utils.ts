import { UserValidation } from "../types";
import fs from "fs";
const path = require("path");

export const p = path.join(
  path.dirname((<any>process.mainModule).filename),
  "../data",
  "user.json"
);

export const getUsersFromFile = (cb: any) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log("err", err);
      cb([]);
    } else {
      cb(JSON.parse(fileContent as any));
    }
  });
};

export const ValidateReq = (
  validationBody: UserValidation,
  validationParams: UserValidation
): boolean => {
  let validationData = { ...validationBody, ...validationParams };
  if (validationData.id && isNaN(Number(validationData.id))) {
    return false;
  }
  if (validationData.firstName && validationData.firstName.trim() === "") {
    return false;
  }
  if (validationData.lastName && validationData.lastName.trim() === "") {
    return false;
  }
  if (validationData.middleName && validationData.middleName.trim() === "") {
    return false;
  }
  if (validationData.phoneNumber && isNaN(Number(validationData.phoneNumber))) {
    return false;
  }
  if (validationData.address && validationData.address.trim() === "") {
    return false;
  }
  if (validationData.firstName && validationData.firstName.trim() === "") {
    return false;
  }

  return true;
};
