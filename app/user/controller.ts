import { Request, Response } from "express";
import { DataFunctions } from "./data-functions";
import { UserModel as User } from "./model";

/**
 * Creates a class Controllers.
 */
export class Controllers {
  /**
   * Gets all users from database.
   *
   * @param {Request} req Request object from Express
   * @param {Response} res Response object from Express.
   */
  getAllUsers = (req: Request, res: Response): void => {
    DataFunctions.find((users: User[]) => {
      res.send({
        users
      });
    });
  };

  /**
   * Gets a single user from Database
   *
   * @param {number} req.params.id is required from user end in the url. This should be a number. It is required for uniquely identifying the user.
   */
  getSingleUser = (req: Request, res: Response): void => {
    if (!req.params.id || isNaN(Number(req.params.id))) {
      res.status(400).send("Id is not valid.");
      return;
    }

    DataFunctions.findOne(req.params.id, (user: User | void) => {
      if (user) res.json(user);
      else return res.status(400).send("No such user was found.");
    });
  };

  /**
   * Adds a new user to database
   *
   * @param {object} req.body is required and should contain data to create a new user. it holds various fields like first name, last name, email etc.
   */
  addUser = (req: Request, res: Response): void => {
    let newUser = new User(req.body);
    newUser.save();
    res.json(newUser);
  };

  /**
   * Deletes a single user
   *
   * @param {number} req.params.id is required from user end in the url. This should be a number. It is required to delete certain user.
   */
  deleteSingleUser = (req: Request, res: Response): void => {
    if (!req.params.id || isNaN(Number(req.params.id))) {
      res.status(400).send("Id is not valid.");
      return;
    }

    DataFunctions.findOneAndRemove(req.params.id, (user: User | void) => {
      res.json(user);
    });
  };

  /**
   * Edit specific user in database.
   *
   * @param {number} req.params.id is required from user end in the url. This should be a number. It is required for uniquely identifying the user.
   * @param {number} req.body is required from to update the details of certain user.
   */
  editUser = (req: Request, res: Response) => {
    if (!req.params.id || isNaN(Number(req.params.id))) {
      res.status(400).send("Id is not valid.");
      return;
    }

    DataFunctions.findoneAndUpdate(
      req.params.id,
      req.body,
      (user: User | void) => {
        res.json(user);
      }
    );
  };
}
