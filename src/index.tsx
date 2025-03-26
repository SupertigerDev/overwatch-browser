/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { Route, Router } from "@solidjs/router";
import HeroesPage from "./pages/HeroesPage";
import { BoxBackground } from "./BoxBackground";
import HeroPage from "./pages/HeroPage";

const root = document.getElementById("root");

render(
  () => (
    <>
      <BoxBackground />
      <Router>
        <Route path="/" component={HeroesPage} />
        <Route path="/heroes" component={HeroesPage} />
        <Route path="/heroes/:id" component={HeroPage} />
      </Router>
    </>
  ),
  root!
);
