import { Request, Response } from "express";
// import { UserItem } from "../types";
import { DataFunctions } from "./dataFunctions";
import { ValidateReq } from "../utils";
import { UserModel as User } from "./model";

export class Controllers {
  getAllUsers = (req: Request, res: Response): void => {
    DataFunctions.find((users: User) => {
      res.send({
        users: users
      });
    });
  };

  getSingleUser = (req: Request, res: Response): void => {
    let validation = ValidateReq(req.body, req.params);

    if (!validation) {
      res.status(400).send("Validation failed.");
      return;
    }

    DataFunctions.findOne(req.params.id, (user: User | void) => {
      if (user) res.json(user);
      else return res.status(400).send("No such user was found.");
    });
  };

  addUser = (req: Request, res: Response): void => {
    let validation = ValidateReq(req.body, req.params);

    if (!validation) {
      res.status(400).send("Validation failed.");
      return;
    }

    let newUser = new User(req.body);
    newUser.save();
    res.json(newUser);
  };

  deleteSingleUser = (req: Request, res: Response): void => {
    let validation = ValidateReq(req.body, req.params);

    if (!validation) {
      res.status(400).send("Validation failed.");
      return;
    }

    DataFunctions.findOneAndRemove(req.params.id, (user: User | void) => {
      res.json(user);
    });
  };

  editUser = (req: Request, res: Response) => {
    let validation = ValidateReq(req.body, req.params);

    if (!validation) {
      res.status(400).send("Validation failed.");
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
