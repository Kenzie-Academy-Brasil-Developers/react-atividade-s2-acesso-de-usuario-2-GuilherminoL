import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./pages/Home/";
import Costumer from "./pages/costumer/";
import Company from "./pages/company/";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/costumer/:id">
        <Costumer />
      </Route>
      <Route path="/company/:id">
        <Company />
      </Route>
    </Switch>
  );
}

export default App;
