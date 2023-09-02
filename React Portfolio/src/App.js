import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Position from "./pages/Position";
import Projects from "./pages/Projects";
import Administrative from "./pages/Administrative";
import InvitedTalks from "./pages/InvitedTalks";
import Contact from "./pages/Contact";
import Publication from "./pages/Publication";
import Journals from "./pages/Journals";
import Conference from "./pages/Conference";
import { useState, useEffect } from "react";
import Gallery from "./pages/Gallery";



function App() {
  const [load, setLoad] = useState(true);

  const handleLoader = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 300);
  }

  useEffect(() => {
    handleLoader();
  }, [])

  return (
    <Router>
      <div className="main-container">
        <Sidebar handleLoader={handleLoader} />

        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <Home load={load} handleLoader={handleLoader} />
            </Route>
            <Route exact path="/research">
              <Research load={load} />
            </Route>
            <Route exact path="/about">
              <About load={load} />
            </Route>
            <Route exact path="/awards">
              <Awards load={load} />
            </Route>
            <Route exact path="/positions">
              <Position load={load} />
            </Route>
            <Route exact path="/projects">
              <Projects load={load} />
            </Route>
            <Route exact path="/academic">
              <Administrative load={load} />
            </Route>
            <Route exact path="/talks">
              <InvitedTalks load={load} />
            </Route>
            <Route exact path="/contact">
              <Contact load={load} />
            </Route>
            <Route exact path="/publication">
              <Publication load={load} handleLoader={handleLoader} />
            </Route>
            <Route exact path="/publication/journals">
              <Journals load={load} />
            </Route>
            <Route exact path="/publication/conference">
              <Conference load={load} />
            </Route>
            <Route exact path="/gallery">
              <Gallery load={load} />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
