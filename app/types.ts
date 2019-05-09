// import { Request } from "express";

export interface UserItem {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  role?: number;
}

export interface UserValidation {
  id?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: number;
  address?: string;
  role?: number;
}
