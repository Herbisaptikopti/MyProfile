import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import NavComponent from "./components/NavComponent";
import homepage from "./pages/HomePage";
import profilepage from "./pages/ProfilePage";
import FooterComponent from "./components/FooterComponent";

const ProjectRouter = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <NavComponent />
      <Router>
        <Routes>
          <Route path="/" Component={homepage} />
          <Route path="/profile" Component={profilepage} />
        </Routes>
      </Router>
      <FooterComponent />
    </React.Suspense>
  );
};

export default ProjectRouter;
