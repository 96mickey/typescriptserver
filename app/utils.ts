// import { UserItem } from "../types";
import fs from "fs";
const path = require("path");
import { UserModel as User } from "./user/model";

export const pathfunction = (file: string) => {
  console.log("main module", process.mainModule);
  return path.join(
    path.dirname((<any>process.mainModule).filename),
    "../data",
    file
  );
};

export const getUsersFromFile = (path: any, cb: any) => {
  fs.readFile(pathfunction(path), (err, fileContent) => {
    if (err) {
      console.log("err", err);
      cb([]);
    } else {
      cb(JSON.parse(fileContent as any));
    }
  });
};

export const ValidateReq = (
  validationBody: User,
  validationParams: User
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
