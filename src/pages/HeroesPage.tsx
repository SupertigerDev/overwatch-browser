import { For } from "solid-js";
import { getHeroesByRole, Hero } from "../data/Heroes";
import style from "./HeroesPage.module.scss";
import { Role, Roles } from "../data/Roles";
import { A } from "@solidjs/router";
const HeroesPage = () => {
  const tankHeroes = getHeroesByRole("TANK");
  return (
    <div class={style.container}>
      <HeroesList heroes={tankHeroes} role={Roles.TANK} />
      <HeroesList heroes={tankHeroes} role={Roles.DAMAGE} />
      <HeroesList heroes={tankHeroes} role={Roles.SUPPORT} />
    </div>
  );
};

const HeroesList = (props: { heroes: Hero[]; role?: Role }) => {
  return (
    <div class={style.heroesListContainer}>
      <div class={style.roleName}>{props.role?.name}</div>
      <div class={style.heroesList}>
        <For each={props.heroes}>{(hero) => <HeroItem hero={hero} />}</For>
      </div>
    </div>
  );
};

const HeroItem = (props: { hero: Hero }) => {
  return (
    <A href={`/heroes/${props.hero.id}`} class={style.heroItem}>
      <div class={style.heroImage}></div>
      <div class={style.heroName}>{props.hero.name.toUpperCase()}</div>
    </A>
  );
};
export default HeroesPage;
