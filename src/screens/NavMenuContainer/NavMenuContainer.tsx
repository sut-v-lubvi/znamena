import NavMenu from "../../components/Layout/NavMenu/NavMenu";

export type ItemEl = {
  title: string;
  src: string;
  id: number;
};
interface HeaderProps {
  stateMenu: boolean;
}
const items = [
  { id: 1, title: "Тест 1", src: "/test/1" },
  { id: 2, title: "Тест 2", src: "/test/2" },
  { id: 3, title: "Тест 3", src: "/test/3" },
  { id: 4, title: "Тест 4", src: "/test/4" },
  { id: 5, title: "Тест 5", src: "/test/5" },
  { id: 6, title: "Тест 6", src: "/test/6" },
];

const NavMenuContainer = ({ stateMenu }: HeaderProps) => {
  return <NavMenu stateMenu={stateMenu} items={items} />;
};

export default NavMenuContainer;
