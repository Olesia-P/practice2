import css from "./App.module.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Activity from "./pages/Activity";
import About from "./pages/About.js";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className={css.App}>
      <Router>
        <nav>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <Link to="/activity" className={css.link}>
            Activity
          </Link>
          <Link to="/about" className={css.link}>
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Posts />}></Route>
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
