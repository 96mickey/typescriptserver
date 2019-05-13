import fs from "fs";
import { getUsersFromFile, p } from "./utils";
import { UserItem } from "../types";

export class UserModel {
  id?: string;
  firstName: string = "";
  middleName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: number = 0;
  address: string = "";
  role?: number = 0;

  constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }

  save() {
    getUsersFromFile((users: UserItem[]) => {
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
}
