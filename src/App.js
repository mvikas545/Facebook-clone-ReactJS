import logo from "./logo.svg";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./auth/components/Home";
import ForgotPassword from "../src/auth/components/ForgotPassword";
import Login from "./auth/components/Login";
import Signup from "./auth/components/Signup";

function App(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/sign-up" exact>
        <Signup />
      </Route>
      <Route path="/forgot-password" exact>
        <ForgotPassword />
      </Route>
    </Switch>
  );
}

export default App;
