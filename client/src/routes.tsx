import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Splash from "./page/Splash";
import Intro from "./page/Intro";
import App from "./page/App";
import NotFound from "./page/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/app" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
