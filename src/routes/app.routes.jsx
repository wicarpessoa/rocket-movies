import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { MovieCreate } from "../pages/MovieCreate";
import { MoviePreview } from "../pages/MoviePreview";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<MoviePreview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<MovieCreate />} />
    </Routes>
  );
}
