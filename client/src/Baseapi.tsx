// client/src/Baseapi.tsx
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
          // prefer set over append so duplicates don't accumulate
          headers.set("authorization", token);
        }
      } catch (err) {
        // sessionStorage might throw in some restricted environments — swallow safely
        // but still return headers
        // eslint-disable-next-line no-console
        console.warn("prepareHeaders: unable to read token from sessionStorage", err);
      }
      return headers; // <-- MUST return the headers object
    },
  }),
  endpoints: () => ({}),
});

export default BaseApi;
