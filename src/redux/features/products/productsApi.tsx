import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBicycles: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
    
    getAllBicycles: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        
      }),
      providesTags:['bicycles']
    }),

    getSingleBicycles: builder.query({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: "GET",
        invalidatesTags:['bicycles']
      }),
    }),

    updateBicycles: builder.mutation({
      query: ({id, data}) => ({
        url: `/products/${id}`,
        method: "PUT",
        body:data
      }),
      invalidatesTags:['bicycles']
    }),

    deleteBicycle: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['bicycles'],
    }),

  }),
});

export const {
  useCreateBicyclesMutation,
  useGetAllBicyclesQuery,
  useGetSingleBicyclesQuery,
  useUpdateBicyclesMutation,
  useDeleteBicycleMutation
} = productsApi;
