import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import StartPage from "./components/start-page";
import DiscoverPage from "./components/discover-page";
import SingleRecipe from "./components/single-recipe";
import AddRecipe from "./components/add-recipe";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/discover" component={DiscoverPage} />
          <Route exact path="/" component={StartPage} />
          <Route path="/recipe" component={SingleRecipe} />
          <Route pat="add-recipe" component={AddRecipe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
