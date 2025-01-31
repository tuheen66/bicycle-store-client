import { BaseQueryApi } from "@reduxjs/toolkit/query";

enum typeEnum {
  mountain = "Mountain",
  road = "Road",
  hybrid = "Hybrid",
  BMX = "BMX",
  electric = "Electric",
}

export type TBicycle = {
  customer?:string,
  email?:string,
  _id: string;
  name: string;
  image: string;
  brand: string;
  price: number;
  type: typeEnum;
  model: string;
  description: string;
  quantity: number;
  totalPrice: number;
  inStock: boolean;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer";
  isBlocked: boolean;
};

export type TOrder = {
  _id: string;
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
};

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
