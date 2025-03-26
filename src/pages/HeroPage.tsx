import style from "./HeroPage.module.scss";
import { useNavigate, useParams } from "@solidjs/router";
import { createEffect, createMemo, Show } from "solid-js";
import { Heroes } from "../data/Heroes";
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
      <div class={style.heroName}>{hero()?.name}</div>
    </Show>
  );
};
export default HeroPage;
