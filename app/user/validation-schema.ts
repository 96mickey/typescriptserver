export class UserSchema {
  firstName = {
    type: "string",
    required: true,
    minLength: 5,
    maxLength: 50
  };
  middleName = {
    type: "string",
    required: true,
    minLength: 5,
    maxLength: 50
  };
  lastName = {
    type: "string",
    required: true,
    minLength: 5,
    maxLength: 50
  };
  email = {
    type: "string",
    regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    required: true
  };
  phoneNumber = {
    type: "number",
    required: true,
    minLength: 8,
    maxLength: 15
  };
  address = {
    type: "string",
    required: true,
    minLength: 5,
    maxLength: 100
  };
  role = {
    type: "string",
    required: true,
    enum: [0, 1]
  };
}
