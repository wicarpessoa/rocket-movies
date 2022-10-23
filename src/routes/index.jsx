import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./App.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
