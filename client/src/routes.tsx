import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Splash from "./page/Splash";
import Introduction from "./page/Introduction";
import Mine from "./page/Mine";
import NotFound from "./page/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default entry page */}
        <Route path="/" element={<Splash />} />

        {/* Onboarding page */}
        <Route path="/intro" element={<Introduction />} />

        {/* Main Mining page */}
        <Route path="/mine" element={<Mine />} />

        {/* Catch-all for invalid routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
