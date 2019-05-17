import express from "express";
import { Controllers } from "./controller";
import { validate } from "../core/middleware/validator";
import { UserSchema } from "./validation-schema";

let controllers = new Controllers();

//getting the schema for validating user input
let schema = new UserSchema();

/**
 * Creates a class Routes.
 *
 * @param {express.Application} app Instance of express application.
 */
export class Routes {
  public routes(app: express.Application): void {
    app.get("/user", controllers.getAllUsers);
    app.get("/user/:id", controllers.getSingleUser);
    app.post("/user", validate(schema), controllers.addUser);
    app.put("/user/:id", validate(schema), controllers.editUser);
    app.delete("/user/:id", controllers.deleteSingleUser);
  }
}
