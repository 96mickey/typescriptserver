import express from "express";
import * as UserController from "./controllers";

export class Routes {
  public routes(app: express.Application): void {
    app.get("/user", UserController.getAllUsers);
    app.get("/user/:id", UserController.getSingleUser);
    app.post("/user", UserController.addUser);
    app.put("/user/:id", UserController.editUser);
    app.delete("/user/:id", UserController.deleteSingleUser);
  }
}
