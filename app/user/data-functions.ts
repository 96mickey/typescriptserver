import { UserModel as User } from "./model";
import { getDataFromFile, writeData } from "../utils";

export class DataFunctions {
  static find = (cb: any) => {
    getDataFromFile("user.json", cb);
  };

  static findOne = (id: string, cb: any): User | void => {
    getDataFromFile("user.json", (users: User[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      cb(users[userIndex]);
    });
  };

  static findOneAndRemove = (id: string, cb: any) => {
    getDataFromFile("user.json", (users: User[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      users.splice(userIndex, 1);
      writeData("user.json", users);
      cb(users);
    });
  };

  static findoneAndUpdate = (id: string, user: User, cb: any) => {
    getDataFromFile("user.json", (users: User[]) => {
      const existingProductIndex = users.findIndex(user => {
        return user.id === id;
      });
      const updatedUsers = [...users];
      updatedUsers[existingProductIndex] = {
        ...updatedUsers[existingProductIndex],
        ...user,
        id: updatedUsers[existingProductIndex].id
      } as User;
      writeData("user.json", updatedUsers);
      cb(user);
    });
  };
}
