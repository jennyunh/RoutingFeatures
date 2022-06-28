import { Switch, Route, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import AddQuote from "./pages/AddQuote";
import FullScreen from "./pages/FullScreen";
import Navbar from "./components/UI/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/allQuotes" />
        </Route>

        <Route path="/allQuotes">
          <AllQuotes />
        </Route>

        <Route path="/quote/:id">
          <FullScreen />
        </Route>

        <Route path="/addQuote">
          <AddQuote />
        </Route>

        <Route path="*">
         <NotFound/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
