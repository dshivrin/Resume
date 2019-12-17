import React from "react";
import ReactDom from "react-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import CreateBrowserHistory from "history/createBrowserHistory";
// import Header from "./components/Header/Header";
import App from "./components/App/App";

import "./index.css";

// ReactDom.render(
//   <Router history={CreateBrowserHistory()}>
//     <Switch>
//       <Route exact={true} path="/" render={() => <Header><App/></Header>} />
//       <Route path="/jokes" render={() => <Header><Jokes/></Header>} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

ReactDom.render(<App />, document.getElementById("root"));
