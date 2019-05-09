import { UserItem, UserValidation } from "../types";

let data: UserItem[] = [
  {
    id: 1,
    firstName: "Mayank",
    middleName: " ",
    lastName: "Nauriyal",
    email: "test@email.com",
    phoneNumber: 8888888888,
    address: "ABC street, XYZ place"
  },
  {
    id: 2,
    firstName: "Mickey",
    middleName: " ",
    lastName: "Nauriyal",
    email: "test2@email.com",
    phoneNumber: 8888888889,
    address: "Blah Blah Blah"
  },
  {
    id: 3,
    firstName: "Random",
    middleName: "Blah",
    lastName: "Random",
    email: "test2@email.com",
    phoneNumber: 8888888899,
    address: "Blah Blah Blah"
  }
];

class UserMdl {
  data: UserItem[];

  constructor(data: UserItem[]) {
    this.data = data;
  }

  validateReq = (
    validationBody: UserValidation,
    validationParams: UserValidation
  ): boolean => {
    let validationData = { ...validationBody, ...validationParams };
    if (validationData.id && isNaN(Number(validationData.id))) {
      return false;
    }
    if (validationData.firstName && validationData.firstName.trim() === "") {
      return false;
    }
    if (validationData.lastName && validationData.lastName.trim() === "") {
      return false;
    }
    if (validationData.middleName && validationData.middleName.trim() === "") {
      return false;
    }
    if (
      validationData.phoneNumber &&
      isNaN(Number(validationData.phoneNumber))
    ) {
      return false;
    }
    if (validationData.address && validationData.address.trim() === "") {
      return false;
    }
    if (validationData.firstName && validationData.firstName.trim() === "") {
      return false;
    }

    return true;
  };
}

export default new UserMdl(data);
