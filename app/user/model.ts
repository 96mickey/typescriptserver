import { getDataFromFile, writeData } from "../core/utils/utils";
import { Role } from "./types";

/**
 * Creates an class UserModel.
 *
 * @constructor
 * @param {object} init This holds the data about a user. this holds the data like id, firstName, lastName and more.
 */
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

  /**
   * Saves a new user to database
   *
   * @this {UserModel}
   */
  save() {
    getDataFromFile("user.json", (users: UserModel[]) => {
      this.id = Date.now().toString();
      users.push(this);
      writeData("user.json", users);
    });
  }
}
