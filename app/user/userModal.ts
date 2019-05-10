import { UserItem, UserValidation } from "../types";
import fs from "fs";
const path = require("path");

const p = path.join(
  path.dirname((<any>process.mainModule).filename),
  "../data",
  "user.json"
);

const getProductsFromFile = (cb: any) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log("err", err);
      cb([]);
    } else {
      cb(JSON.parse(fileContent as any));
    }
  });
};

export class UserMdl {
  id?: string;
  firstName: string = "";
  middleName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: number = 0;
  address: string = "";
  role?: number = 0;

  constructor(init?: Partial<UserMdl>) {
    Object.assign(this, init);
  }

  save() {
    getProductsFromFile((users: UserItem[]) => {
      if (this.id) {
        const existingProductIndex = users.findIndex(user => {
          return user.id === this.id;
        });
        const updatedUsers = [...users];
        updatedUsers[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedUsers), err => {
          console.log(err);
        });
      } else {
        this.id = Date.now().toString();
        users.push(this);
        fs.writeFile(p, JSON.stringify(users), err => {
          console.log(err);
        });
      }
    });
  }

  static find = (cb: any) => {
    getProductsFromFile(cb);
  };

  static findOne = (id: string, cb: any): UserItem | void => {
    getProductsFromFile((users: UserItem[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      cb(users[userIndex]);
    });
  };

  static findOneAndRemove = (id: string, cb: any) => {
    getProductsFromFile((users: UserItem[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      users.splice(userIndex, 1);
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });
      cb(users);
    });
  };

  static validateReq = (
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
    if (
      validationData.phoneNumber &&
      isNaN(Number(validationData.phoneNumber))
    ) {
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
}
