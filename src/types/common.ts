import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IActiveProps {
  isActive: boolean;
}

export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export interface IAdmin {
  id: string;
  userName: string;
  password: string;
  securityCode: number;
  adminImg: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
