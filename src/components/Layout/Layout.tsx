import { useState } from "react";
import Header from "./Header/Header";
import NavMenuContainer from "../../screens/NavMenuContainer/NavMenuContainer";

function Layout() {
  const [stateMenu, setStateMenu] = useState(false);
  return (
    <div>
      <Header stateMenu={stateMenu} setStateMenu={setStateMenu} />
      <NavMenuContainer stateMenu={stateMenu} />
    </div>
  );
}

export default Layout;
