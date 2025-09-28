import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Splash from "./page/Splash";
import Introduction from "./page/Introduction";
import NotFound from "./page/NotFound";

/**
 * HashRouter avoids server 404s on Vercel for initial testing.
 * Route `/app` simply redirects to `/intro` because there's no App.tsx file.
 */
const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/intro" element={<Introduction />} />
        {/* If you add App.tsx later, change the next line to: <Route path="/app" element={<App/>} /> */}
        <Route path="/app" element={<Navigate to="/intro" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
