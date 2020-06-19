import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    process.env.NODE_ENV === 'production' ?
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div> :
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
