import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScreenTests from "./screens/ScreenTests/ScreenTests";

import Layout from "./components/Layout/Layout";
import { ScreenFinish } from "./screens/ScreenFinish/ScreenFinish";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/test" element={<ScreenTests />} />
          <Route path="/finish" element={<ScreenFinish />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
