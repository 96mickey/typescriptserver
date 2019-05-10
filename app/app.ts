import express from "express";
import * as bodyParser from "body-parser";
import Routes from "./user";

export class App {
  public app: express.Application;
  public userRoutes: Routes = new Routes();

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
