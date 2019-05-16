import { getDataFromFile, writeData } from "../utils";
import { Role } from "../types";

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
    getDataFromFile("user.json", (users: UserModel[]) => {
      this.id = Date.now().toString();
      users.push(this);
      writeData("user.json", users);
    });
  }
}
