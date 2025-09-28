import React from "react";
import { createHashRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Splash from "./page/Splash";
import Introduction from "./page/Introduction";
import NotFound from "./page/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <Splash />,
    errorElement: <NotFound />,
  },
  {
    path: "/intro",
    element: <Introduction />,
  },
  {
    path: "/app",
    element: <AppLayout />,
  },
]);

export default router;
