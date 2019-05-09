export const jsend = () => {
  return function(status: string, data: any, message: string) {
    // (<any>res).success = function(data: object, message: string = "") {
    //   (<any>res.json)({ status: "success", data: data, message: message });
    // };
    // (<any>res).failure = function(message: string = "", data: object = {}) {
    //   (<any>res).json({ status: "failure", data: data, message: message });
    // };
    // next();
  };
};

// module.exports = jsend;
