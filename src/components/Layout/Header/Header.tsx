import { BurgerButton } from "@/common/components/BurgerButton/BurgerButton";
import style from "./Header.module.css";
interface HeaderProps {
  setStateMenu: any;
  stateMenu: boolean;
}
function Header({ setStateMenu, stateMenu }: HeaderProps) {
  return (
    <div
      className={
        stateMenu
          ? [style.header__container, style.header__shadow].join(" ")
          : style.header__container
      }
    >
      <div className={style.burger_button}>
        <BurgerButton stateMenu={stateMenu} setStateMenu={setStateMenu} />
      </div>
      <div className={style.header__title}>
        <h1 className={style.title}>ZNAMENA</h1>
      </div>
      <div className={style.false_div}></div>
    </div>
  );
}

export default Header;
