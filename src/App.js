import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Setting";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
// import TextEditor from "./components/textEditor/TextEditor";

function App() {
  const user = true;
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/write">{user ? <Write /> : <Home />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/settings">{user ? <Setting /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
