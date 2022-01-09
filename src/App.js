import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './app.css'
import Home from "./pages/home/Home";

import NotFound from "./pages/home/NotFound";
import Users from "./Users";
import { Product } from "./Products";
import View from "./View.js";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import UserView from "./UserView";
import EditUsers from "./EditUsers";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <div className="sidebarflex">
          <Sidebar />
        </div>

        <div className="others">
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
            <Route path="/add">
              <AddProduct />
            </Route>
            <Route path="/edit/:id">
              <EditProduct />
            </Route>
            <Route path="/view/:id">
              <View />
            </Route>
            <Route path="/UserView/:id">
              <UserView />
            </Route>
            <Route path="/UserEdit/:id">
              <EditUsers />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>

      </div>
    </div>
  );
}

export default App;

