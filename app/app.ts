import express from "express";
import * as bodyParser from "body-parser";
import { Users } from "./routes/userRoutes";

class App {
  public app: express.Application;
  public userRoutes: Users = new Users();

  constructor() {
    this.app = express();
    this.config();
    this.userRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
