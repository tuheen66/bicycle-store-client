import { baseApi } from "../../api/baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),

    getCustomerOrders: builder.query({
      query: (email) => ({
        url: `/orders/customer/${email}`,
        method: "GET",
      }),
    }),

    createOder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders"],
    }),

    payment: builder.mutation({
      query: (data) => ({
        url: "/orders/payment/create-payment-intent",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useCreateOderMutation,
  useGetCustomerOrdersQuery,
  useDeleteOrderMutation,
  usePaymentMutation,
} = ordersApi;
