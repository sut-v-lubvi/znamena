import NavMenu from "@/components/Layout/NavMenu/NavMenu";

export type ItemEl = {
  title: string;
  src: string;
};
interface HeaderProps {
  stateMenu: boolean;
}
const items = [
  { title: "Тест 1", src: "/test" },
  { title: "Тест 2", src: "/test" },
  { title: "Тест 3", src: "/test" },
  { title: "Тест 4", src: "/test" },
  { title: "Тест 5", src: "/test" },
  { title: "Тест 6", src: "/test" },
];

const NavMenuContainer = ({ stateMenu }: HeaderProps) => {
  return <NavMenu stateMenu={stateMenu} items={items} />;
};

export default NavMenuContainer;
