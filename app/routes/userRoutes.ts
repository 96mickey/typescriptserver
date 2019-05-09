// import { Request, Response } from "express";
import express from "express";
import * as UserController from "../controllers/user/userController";

export class Users {
  public routes(app: express.Application): void {
    app.get("/user", UserController.getAllUsers);
    app.get("/user/:id", UserController.getSingleUser);
    app.post("/user", UserController.addUser);
    app.put("/user/:id", UserController.editUser);
    app.delete("/user/:id", UserController.deleteSingleUser);
  }
}
