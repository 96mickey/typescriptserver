export class User {
  firstName: string = "";
  middleName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: number = 0;
  address: string = "";
  private _role?: number = 0;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
