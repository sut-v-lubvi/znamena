import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScreenTests from "./screens/ScreenTests/ScreenTests";
import ScreenFinish from "./screens/ScreenFinish/ScreenFinish";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/tests" element={<ScreenTests />} />
          <Route path="/finish" element={<ScreenFinish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
