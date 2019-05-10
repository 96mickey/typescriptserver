// import { Request } from "express";

export interface UserItem {
  id?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  role?: number;
}

export interface UserValidation {
  id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: number;
  address?: string;
  role?: number;
}
