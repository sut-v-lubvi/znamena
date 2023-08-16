import { ItemEl } from "@/screens/NavMenuContainer/NavMenuContainer";
import style from "./NavMenu.module.css";
interface NavProps {
  items: Array<ItemEl>;
  stateMenu: boolean;
}

export default function NavMenu({ items, stateMenu }: NavProps) {
  return (
    <div
      className={stateMenu ? [style.menu, style.active].join(" ") : style.menu}
    >
      <div className={style.container}>
        {items.map((e) => {
          return (
            <div key={e.id} className={style.link_tests}>
              <a href={e.src}>{e.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
