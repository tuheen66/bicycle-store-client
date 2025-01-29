import { BaseQueryApi } from "@reduxjs/toolkit/query";

enum typeEnum {
  mountain = "Mountain",
  road = "Road",
  hybrid = "Hybrid",
  BMX = "BMX",
  electric = "Electric",
}

export type TBicycle = {
  _id:string,
  name: string;
  image: string;
  brand: string;
  price: number;
  type: typeEnum;
  model: string;
  description: string;
  quantity: number;
  inStock: boolean;
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