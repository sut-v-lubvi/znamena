import NavMenu from "../../components/Layout/NavMenu/NavMenu";

export type ItemEl = {
  title: string;
  src: string;
  id: number;
};
interface HeaderProps {
  setStateMenu: (stateMenu: boolean) => void;
  stateMenu: boolean;
}
const items = [
  { id: 1, title: "Тест на знание названий знамён", src: "/test/1" },
];

const NavMenuContainer = ({ stateMenu, setStateMenu }: HeaderProps) => {
  return (
    <NavMenu stateMenu={stateMenu} items={items} setStateMenu={setStateMenu} />
  );
};

export default NavMenuContainer;
