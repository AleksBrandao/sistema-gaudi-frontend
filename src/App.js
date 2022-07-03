import React, { useContext } from "react";
import ScrollTopArrow from "./components/ScrollTopArrow/scrolltoparrow";
import './app.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./components/pages/Main/Main";
import AlunoPage from "./components/pages/AlunoPage/AlunoPage";
import LoginPage1 from '../src/components/pages/LoginPage1/index'
import { AuthContext } from "./components/contexts/auth";
import { AuthProvider } from "./components/contexts/auth";

const Private = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return children;
};

function App() {
  return (
  
      <div className="app">
      <Router forceRefresh={true}>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Main} />
            {/* <Route path="/cursos" exact component={ProjectPage} /> */}
            <Route path="/login" exact component={LoginPage1} />

            <Private>
              <Route path="/home" exact component={AlunoPage} />
            </Private>

            <Redirect to="/" />
          </Switch>
        </AuthProvider>
      </Router>
    
 <ScrollTopArrow />


 
    </div>
  );
}

export default App;
