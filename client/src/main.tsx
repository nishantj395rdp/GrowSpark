// client/src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Store";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { init } from "@telegram-apps/sdk";

/**
 * Initialize Telegram SDK only if available.
 * Wrap in try/catch so initialization failure doesn't kill the app.
 */
try {
  // Prefer checking for global Telegram object that the SDK expects.
  if (typeof window !== "undefined" && (window as any).Telegram) {
    init();
  } else {
    // Not in telegram web environment — skip init
    // eslint-disable-next-line no-console
    console.info("Telegram SDK not detected. Skipping init.");
  }
} catch (err) {
  // eslint-disable-next-line no-console
  console.warn("Telegram SDK init failed — continuing without Telegram:", err);
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  // If root div missing, fail fast with console message.
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
