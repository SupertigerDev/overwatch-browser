import style from "./HeroPage.module.scss";
import { A, useNavigate, useParams } from "@solidjs/router";
import { createEffect, createMemo, For, Show } from "solid-js";
import { Heroes } from "../data/Heroes";
import { Cosmetic, Cosmetics } from "../data/Cosmetics";
const HeroPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  const hero = createMemo(() => Heroes.find((hero) => hero.id === params.id));

  createEffect(() => {
    if (!hero()) {
      navigate("/", { replace: true });
    }
  });

  return (
    <Show when={hero()}>
      <div class={style.container}>
        <div class={style.heroName}>{hero()?.name.toUpperCase()}</div>
        <CosmeticList />
      </div>
    </Show>
  );
};

const CosmeticList = () => {
  return (
    <div class={style.cosmeticList}>
      <For each={Cosmetics}>
        {(cosmetic) => <CosmeticItem cosmetic={cosmetic} />}
      </For>
    </div>
  );
};
const CosmeticItem = (props: { cosmetic: Cosmetic }) => {
  return (
    <A href={`./${props.cosmetic.id}`} class={style.cosmeticItem}>
      <div class={style.cosmeticImage}></div>
      <div>{props.cosmetic.name.toUpperCase()}</div>
    </A>
  );
};

export default HeroPage;
