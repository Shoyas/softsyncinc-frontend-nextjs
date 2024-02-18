import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    adminLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    changePasswordByToken: build.query({
      query: (data) => {
        return {
          url: `${AUTH_URL}/change-password`,
          method: "POST",
          headers: {
            Authorization: `${data.authKey}`,
          },
          data,
        };
      },
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useAdminLoginMutation, useChangePasswordByTokenQuery } = authApi;
