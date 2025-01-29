import { baseApi } from "../../api/baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
    }),

    

  }),
});

export const { useGetAllOrdersQuery } = ordersApi;
