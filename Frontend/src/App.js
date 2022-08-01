import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Setting";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Posts from "./components/posts/Posts";
import { Context, ContextProvider } from "./context/Context";

// import TextEditor from "./components/textEditor/TextEditor";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <ContextProvider>
      <Navbar />
      </ContextProvider>
      <Switch>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/write">{user ? <Write /> : <Home />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/login">{user ? <Home /> : <ContextProvider><Login /></ContextProvider>}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/settings">{user ? <Setting /> : <Login />}</Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
