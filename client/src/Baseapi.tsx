import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

/**
 * Base API configuration.
 * - Uses Vite env VITE_API_URL if provided (set this in Vercel / environment)
 * - Returns headers from prepareHeaders (CRITICAL)
 */
const baseUrl = (import.meta.env.VITE_API_URL as string) ?? "http://localhost:3000";

const BaseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      try {
        const token = sessionStorage.getItem("token");
        if (token) {
          headers.set("authorization", token);
        }
      } catch (err) {
        console.warn("prepareHeaders: unable to read token from sessionStorage", err);
      }
      return headers; // MUST return
    },
  }),
  endpoints: () => ({}),
});

export default BaseApi;
