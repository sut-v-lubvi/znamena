import style from "./BurgerButton.module.css";

interface BurgerProps {
  setStateMenu: any;
  stateMenu: any;
}

export const BurgerButton = ({ setStateMenu, stateMenu }: BurgerProps) => {
  return (
    <div
      onClick={() => setStateMenu(!stateMenu)}
      className={
        stateMenu ? [style.menu_btn, style.active].join(" ") : style.menu_btn
      }
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
