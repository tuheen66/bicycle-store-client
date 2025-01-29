import { baseApi } from "../../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    getAllUser: builder.query({
      query: () => ({
        url: "/auth/users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    blockUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/auth/users/${id}/block`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetAllUserQuery,
  useBlockUserMutation,
} = userApi;
