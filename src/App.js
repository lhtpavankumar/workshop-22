import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ShowUserDetails from "./components/ShowUserDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user-details" component={ShowUserDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
