import express from "express";
import * as UserController from "./controllers";
import { Controllers } from "./controllers";
let controllers = new Controllers();

export class Routes {
  public routes(app: express.Application): void {
    app.get("/user", controllers.getAllUsers);
    app.get("/user/:id", controllers.getSingleUser);
    app.post("/user", controllers.addUser);
    app.put("/user/:id", controllers.editUser);
    app.delete("/user/:id", controllers.deleteSingleUser);
  }
}
