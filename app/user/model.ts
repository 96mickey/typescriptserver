import fs from "fs";
import { getUsersFromFile, pathfunction } from "../utils";
// import { UserItem } from "../types";

enum Role {
  user,
  admin
}

export class UserModel {
  id?: string;
  firstName: string = "";
  middleName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: number = 0;
  address: string = "";
  role?: Role = Role.user;

  constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }

  save() {
    getUsersFromFile("user.json", (users: UserModel[]) => {
      this.id = Date.now().toString();
      users.push(this);
      fs.writeFile(pathfunction("user.json"), JSON.stringify(users), err => {
        console.log(err);
      });
    });
  }
}
