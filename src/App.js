import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './app.css'
import Home from "./pages/home/Home";

import NotFound from "./pages/home/NotFound";
import { Users } from "./Users";
import { Product } from "./Products";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />




        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="**">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

