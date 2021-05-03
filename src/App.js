import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBarR from './Components/NavBarR';
import FormNews from "./Components/FormNews"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBarR />
      <Switch>
        <Route path="/news">
          <FormNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
