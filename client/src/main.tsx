import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Store";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes"; // our new HashRouter setup
import { init } from "@telegram-apps/sdk";

/**
 * Initialize Telegram SDK only if available.
 */
try {
  if (typeof window !== "undefined" && (window as any).Telegram) {
    init();
  } else {
    console.info("Telegram SDK not detected. Skipping init.");
  }
} catch (err) {
  console.warn("Telegram SDK init failed — continuing without Telegram:", err);
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("Root element not found. Make sure index.html contains <div id='root'></div>");
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <div className="min-h-screen">
        <Provider store={Store}>
          <RouterProvider router={Routes} />
        </Provider>
      </div>
    </React.StrictMode>
  );
}
