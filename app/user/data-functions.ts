import { UserModel as User } from "./model";
import { getDataFromFile, writeData } from "../core/utils/utils";

/**
 * Creates a class Routes.
 *
 * @param {express.Application} app Instance of express application.
 */
export class DataFunctions {
  /**
   * Function to find all the users.
   *
   * @param {Function} cb
   */
  static find = (cb: any) => {
    getDataFromFile("user.json", cb);
  };

  /**
   * Function to find a specific user.
   *
   * @param {Function} cb
   * @param {string} id Id pointing to a specific user in database.
   */
  static findOne = (id: string, cb: any): User | void => {
    getDataFromFile("user.json", (users: User[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      cb(users[userIndex]);
    });
  };

  /**
   * Function to remove a specific .
   *
   * @param {Function} cb
   * @param {string} id Id pointing to a specific user in database.
   */
  static findOneAndRemove = (id: string, cb: any) => {
    getDataFromFile("user.json", (users: User[]) => {
      let userIndex = users.findIndex(p => p.id === id);
      users.splice(userIndex, 1);
      writeData("user.json", users);
      cb(users);
    });
  };

  /**
   * Function to remove a specific .
   *
   * @param {Function} cb
   * @param {string} id Id pointing to a specific user in database.
   * @param {object} user New data for user to update.
   */
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
