import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Navigation } from "./components/Navigation";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Navigation />
      <Switch>
        <Route path="/">
          <ItemListContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
