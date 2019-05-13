import { Request, Response } from "express";
import { UserItem } from "../types";
import { UserControlModel as UserMdl } from "./userControlModel";
import { ValidateReq } from "./utils";
import { UserModel as User } from "./userModel";

export class Controllers {
  getAllUsers = (req: Request, res: Response) => {
    UserMdl.find((users: UserItem) => {
      res.send({
        users: users
      });
    });
  };

  getSingleUser = (req: Request, res: Response) => {
    let validation = ValidateReq(req.body, req.params);

    if (!validation) return res.status(400).send("Validation failed.");

    UserMdl.findOne(req.params.id, (user: UserItem | void) => {
      if (user) res.json(user);
      else return res.status(400).send("No such user was found.");
    });
  };

  addUser = (req: Request, res: Response) => {
    let validation = ValidateReq(req.body, req.params);

    if (!validation) return res.status(400).send("Validation failed.");

    let newUser = new User(req.body);
    newUser.save();
    res.send({ data: newUser });
  };

  deleteSingleUser = (req: Request, res: Response) => {
    let validation = ValidateReq(req.body, req.params);

    if (!validation) return res.status(400).send("Validation failed.");

    UserMdl.findOneAndRemove(req.params.id, (user: UserItem | void) => {
      res.json(user);
    });
  };

  editUser = (req: Request, res: Response) => {
    let validation = ValidateReq(req.body, req.params);

    if (!validation) return res.status(400).send("Validation failed.");

    let user = new User({ ...req.body });

    user.save();

    res.json(user);
  };
}
