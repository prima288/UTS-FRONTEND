import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const RegisterWeb = React.lazy(() => import("pages/RegisterWeb"));
const LoginWeb = React.lazy(() => import("pages/LoginWeb"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/loginweb" element={<LoginWeb />} />
          <Route path="/registerweb" element={<RegisterWeb />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
