import fs from "fs";
const path = require("path");

/**
 *Path to interact with json files
 *
 * @param {string} file This points to the json file which holds the data.
 */
export const pathfunction = (file: string) => {
  return path.join(
    path.dirname((<any>process.mainModule).filename),
    "../data",
    file
  );
};

/**
 *Reading data from *.json
 *
 * @param path This points to the json file which holds the data.
 * @param cb Callback passed to handle error.
 */
export const getDataFromFile = (path: any, cb: any) => {
  fs.readFile(pathfunction(path), (err, fileContent) => {
    if (err) {
      console.log("err", err);
      cb([]);
    } else {
      cb(JSON.parse(fileContent as any));
    }
  });
};

/**
 *Writing data to *.json file
 *
 * @param {string} file This points to the json file which holds the data.
 */
export const writeData = (file: string, data: any[]) => {
  fs.writeFile(pathfunction(file), JSON.stringify(data), err => {
    console.log(err);
  });
};
