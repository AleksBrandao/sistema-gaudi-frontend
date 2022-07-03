import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage1 from "./pages/LoginPage1";
import { AlunoPage } from "./pages";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" element={<LoginPage1 />} />
        <Route exact path="/home" element={<AlunoPage />} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
