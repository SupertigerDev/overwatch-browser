import { For } from "solid-js";
import { getHeroesByRole, Hero } from "../data/Heroes";
import style from "./HeroesPage.module.scss";
const HeroesPage = () => {
	const tankHeroes = getHeroesByRole('Tank')
  return (
    <div class={style.container}>
      <HeroesGrid heroes={tankHeroes}/>
      <HeroesGrid heroes={tankHeroes}/>
      <HeroesGrid heroes={tankHeroes}/>
    </div>
  );
};

const HeroesGrid = (props: {heroes: Hero[]}) => {
	return <div class={style.heroesGrid}>
		<For each={props.heroes}>
			{hero => <HeroItem hero={hero}/>}
		</For>
	</div>
}


const HeroItem = (props: {hero: Hero}) => {
	return <div class={style.heroItem}>
		<div class={style.heroImage}></div>
		<div class={style.heroName}>{props.hero.name}</div>
	</div>	
}
export default HeroesPage;
