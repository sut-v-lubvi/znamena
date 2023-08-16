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
  { id: 1, title: "Тест 1", src: "/test" },
  { id: 2, title: "Тест 2", src: "/test" },
  { id: 3, title: "Тест 3", src: "/test" },
  { id: 4, title: "Тест 4", src: "/test" },
  { id: 5, title: "Тест 5", src: "/test" },
  { id: 6, title: "Тест 6", src: "/test" },
];

const NavMenuContainer = ({ stateMenu }: HeaderProps) => {
  return <NavMenu stateMenu={stateMenu} items={items} />;
};

export default NavMenuContainer;
