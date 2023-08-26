import { ItemEl } from "../../../screens/NavMenuContainer/NavMenuContainer";
import style from "./NavMenu.module.css";
interface NavProps {
  setStateMenu: (stateMenu: boolean) => void;
  items: Array<ItemEl>;
  stateMenu: boolean;
}

export default function NavMenu({ items, stateMenu, setStateMenu }: NavProps) {
  return (
    <div
      className={stateMenu ? [style.menu, style.active].join(" ") : style.menu}
    >
      <div className={style.container}>
        {items.map((e) => {
          return (
            <div key={e.id} className={style.link_tests}>
              <div
                className={style.icon}
                dangerouslySetInnerHTML={{
                  __html: "<span class='red'>ö</span>[",
                }}
              ></div>
              <a onClick={() => setStateMenu(!stateMenu)} href={e.src}>
                {e.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
