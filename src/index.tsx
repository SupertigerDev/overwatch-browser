/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { Route, Router } from "@solidjs/router";
import { BoxBackground } from "./BoxBackground";
import { lazy } from "solid-js";

const HeroesPage = lazy(() => import("./pages/HeroesPage"))
const HeroPage = lazy(() => import("./pages/HeroPage"))

const root = document.getElementById("root");

render(
  () => (
    <>
      <BoxBackground />
      <Router base="/overwatch-browser">
        <Route path="/" component={HeroesPage} />
        <Route path="/heroes" component={HeroesPage} />
        <Route path={["/heroes/:heroId", "/heroes/:heroId/:cosmeticId", "/heroes/:heroId/:cosmeticId/:cosmeticItemId"]} component={HeroPage} />
      </Router>
    </>
  ),
  root!
);
