import express from "express";
import * as bodyParser from "body-parser";
import Routes from "./user";

/**
 * Creates a new instance of App.
 *
 * @constructor
 * @exports App
 */
export class App {
  public app: express.Application; //holds the return value of express.
  public userRoutes: Routes = new Routes(); //instance of user routes.

  constructor() {
    this.app = express();
    this.config();
    this.userRoutes.routes(this.app); //passing the return value of express to user routes.
  }

  /**
   * This functions is responsible for global configuration for the application.
   *
   * @this {App}
   */
  /** @private */ private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
