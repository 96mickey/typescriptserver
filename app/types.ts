import { Request, Response } from "express";

enum Role {
  user,
  admin
}

export interface UserItem {
  id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: number;
  address?: string;
  role?: Role;
}

export type CallbackFunction = (req: Request, res: Response) => void;
