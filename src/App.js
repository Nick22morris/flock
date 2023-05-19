import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Post from "./pages/Post";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <header>
        <nav>
          <ul>
            {!isAuth ? (
              <div>
                <li>
                  <Link to="/" className="title">
                    <h1>The Flock Letters</h1>
                  </Link>
                </li>
              </div>
            ) : (
              <>
                <li>
                  <Link to="/" className="title">
                    <h1>The Flock Letters</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/createpost"> Create Post </Link>
                </li>
                <li>
                  <p onClick={signUserOut}> Log Out</p>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
