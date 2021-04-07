import logo from "./logo.svg";
import "./App.css";
import { AdminDashboard, BLogin, BSignUp, Main, NavBar } from "./imports/Imports";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/businessLogin" component={BLogin} />
        <Route path="/businessSignUp" component={BSignUp} />
        <Route path="/adminDashboard/:id" component={AdminDashboard} />
      </Switch>
    </>
  );
}

export default App;
