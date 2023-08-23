import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScreenTests from "./screens/ScreenTests/ScreenTests";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import { ScreenFinish } from "./screens/ScreenFinish/ScreenFinish";
import ScreenSingleTest from "./screens/ScreenSingleTest/ScreenSingleTest";

function App() {
  // const [currentTestId, setCurrentTestId]= useState<number>(1)
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          {/* <Route path="/test" element={<ScreenTests />} /> */}
          <Route path="/test/:id?" element={<ScreenSingleTest />} />
          <Route path="/finish" element={<ScreenFinish />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
