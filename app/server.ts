import { App } from "./app";
const PORT = 3000;

/**
 * Creates an instance of App.
 * This holds the value of express application.
 *
 * @constructor
 * @author: Mayank
 * @return {null}
 */
const app = new App().app;

/**
 * Initiates the service at specified PORT
 */
app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
