// import { UserItem } from "../types";
import { UserModel as User } from "./model";
import fs from "fs";
import { getUsersFromFile, pathfunction } from "../utils";

export class DataFunctions {
  static find = (cb: any) => {
    getUsersFromFile("user.json", cb);
  };

  static findOne = (id: string, cb: any): User | void => {
    getUsersFromFile("user.json", (users: User[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      cb(users[userIndex]);
    });
  };

  static findOneAndRemove = (id: string, cb: any) => {
    getUsersFromFile("user.json", (users: User[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      users.splice(userIndex, 1);
      fs.writeFile(pathfunction("user.json"), JSON.stringify(users), err => {
        console.log(err);
      });
      cb(users);
    });
  };

  static findoneAndUpdate = (id: string, user: User, cb: any) => {
    getUsersFromFile("user.json", (users: User[]) => {
      const existingProductIndex = users.findIndex(user => {
        return user.id === id;
      });
      const updatedUsers = [...users];
      updatedUsers[existingProductIndex] = {
        ...updatedUsers[existingProductIndex],
        ...user
      } as User;
      fs.writeFile(
        pathfunction("user.json"),
        JSON.stringify(updatedUsers),
        err => {
          console.log(err);
        }
      );
      cb(user);
    });
  };
}
