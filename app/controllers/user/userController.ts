import { Request, Response } from "express";
import UserMdl from "../../model/user";
import { UserItem } from "../../types";
import { User } from "./userClass";

export const getAllUsers = (req: Request, res: Response) => {
  res.status(200).send({
    message: "success",
    data: UserMdl.data
  });
};

export const getSingleUser = (req: Request, res: Response) => {
  let validation = UserMdl.validateReq(req.body, req.params);

  if (!validation) return res.status(400).send("Validation failed.");

  let indexForSingleUser = UserMdl.data.findIndex(item => {
    return Number(req.params.id) === item.id;
  });
  if (indexForSingleUser < 0)
    return res.status(400).send("No such user was found.");

  if (!UserMdl.data[indexForSingleUser])
    return res.status(400).send("No such user was found.");

  res.send({ data: UserMdl.data[indexForSingleUser] });
};

export const addUser = (req: Request, res: Response) => {
  let validation = UserMdl.validateReq(req.body, req.params);

  if (!validation) return res.status(400).send("Validation failed.");

  let newUser: UserItem = new User(req.body);
  newUser.id = Date.now();
  UserMdl.data.push(newUser);
  res.send({ data: newUser });
};

export const deleteSingleUser = (req: Request, res: Response) => {
  let validation = UserMdl.validateReq(req.body, req.params);

  if (!validation) return res.status(400).send("Validation failed.");

  let indexForUserToDelete = UserMdl.data.findIndex(item => {
    return Number(req.params.id) === item.id;
  });
  if (indexForUserToDelete < 0)
    return res.status(400).send("No such user was found.");
  UserMdl.data.splice(indexForUserToDelete, 1);
  res.send({ data: UserMdl.data });
};

export const editUser = (req: Request, res: Response) => {
  let validation = UserMdl.validateReq(req.body, req.params);

  if (!validation) return res.status(400).send("Validation failed.");

  let indexForUser = UserMdl.data.findIndex(item => {
    return Number(req.params.id) === item.id;
  });
  if (indexForUser < 0) return res.status(400).send("No such user was found.");

  UserMdl.data[indexForUser] = { ...req.body };
  res.send({ data: UserMdl.data });
};
