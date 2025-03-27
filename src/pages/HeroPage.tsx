import style from "./HeroPage.module.scss";
import { A, useNavigate, useParams } from "@solidjs/router";
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  Show,
} from "solid-js";
import { Hero, Heroes } from "../data/Heroes";
import { Cosmetic, Cosmetics } from "../data/Cosmetics";
import { cn } from "../utils";
import { Skin, Tiers } from "../data/skins/Skin";

const HeroPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ heroId: string; cosmeticId?: string; cosmeticItemId?: string; }>();

  const hero = createMemo(() =>
    Heroes.find((hero) => hero.id === params.heroId)
  );
  const cosmetic = createMemo(() =>
    Cosmetics.find((cosmetic) => cosmetic.id === params.cosmeticId)
  );


  createEffect(() => {
    if (!hero()) {
      navigate("/", { replace: true });
      return;
    }
    if (!cosmetic() && params.cosmeticId) {
      navigate(`../`, { replace: true });
    }
  });

  return (
    <Show when={hero()}>
      <div class={style.container}>
        <div class={style.heroName}>{hero()?.name.toUpperCase()}</div>
        <div class={style.cosmeticContainer}>
          <CosmeticCategoryList sideBarMode={!!cosmetic()} />
          <Show when={cosmetic() && hero()}>
            <CosmeticGrid cosmetic={cosmetic()!} hero={hero()!} />
          </Show>
        </div>
        <Show when={params.cosmeticItemId}>
        <div class={style.heroBgContainer}>
          <img class={style.heroBgImage} src={`/overwatch-browser/hero-skins/${hero()?.id}/${params.cosmeticItemId}.webp`} alt="" />
        </div>
        </Show>
      </div>
    </Show>
  );
};

const CosmeticCategoryList = (props: { sideBarMode?: boolean }) => {
  return (
    <div class={style.cosmeticCategoryList}>
      <For each={Cosmetics}>
        {(cosmetic) => (
          <CosmeticCategoryItem
            cosmetic={cosmetic}
            sideBarMode={props.sideBarMode}
          />
        )}
      </For>
    </div>
  );
};
const CosmeticCategoryItem = (props: {
  cosmetic: Cosmetic;
  sideBarMode?: boolean;
}) => {
  const params = useParams<{ heroId: string; cosmeticId: string }>();

  return (
    <A
      title={props.cosmetic.name}
      href={`/heroes/${params.heroId}/${props.cosmetic.id}`}
      class={cn(
        style.cosmeticCategoryItem,
        props.sideBarMode ? style.sideBarMode : undefined
      )}
    >
      <div class={style.cosmeticImage}></div>
      <Show when={!props.sideBarMode}>
        <div>{props.cosmetic.name.toUpperCase()}</div>
      </Show>
    </A>
  );
};

const CosmeticGrid = (props: { cosmetic: Cosmetic; hero: Hero }) => {
  const cosmeticId = () => props.cosmetic.id as "skins";
  const [items, setItems] = createSignal<Skin[]>([]);

  createEffect(async () => {
    const items = await props.hero[cosmeticId()]?.();
    setItems(items || []);
  });

  return (
    <div class={style.cosmeticGrid}>
      <For each={items()}>{(item) => <CosmeticItem item={item} />}</For>
    </div>
  );
};
const CosmeticItem = (props: { item: Skin }) => {
  const tier = () => Tiers[props.item.tier];
  const params = useParams<{ heroId: string; cosmeticId: string;}>();

  return (
    <A href={`/heroes/${params.heroId}/${params.cosmeticId}/${props.item.id}`} class={style.cosmeticItem}>
      <img
        src={`/overwatch-browser/hero-skin-icons/${params.heroId}/${props.item.id}.webp`}
        alt=""
      />
      <div class={style.itemName} style={{ background: tier().color }}>
        {props.item.name}
      </div>
    </A>
  );
};

export default HeroPage;
