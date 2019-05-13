import { UserItem } from "../types";
import fs from "fs";
import { getUsersFromFile, p } from "./utils";

export class UserControlModel {
  static find = (cb: any) => {
    getUsersFromFile(cb);
  };

  static findOne = (id: string, cb: any): UserItem | void => {
    getUsersFromFile((users: UserItem[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      cb(users[userIndex]);
    });
  };

  static findOneAndRemove = (id: string, cb: any) => {
    getUsersFromFile((users: UserItem[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      users.splice(userIndex, 1);
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });
      cb(users);
    });
  };
}
