import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, createContext } from "react";
import Layout from "./components/Layout/Layout";
import { ScreenFinish } from "./screens/ScreenFinish/ScreenFinish";
import ScreenSingleTest from "./screens/ScreenSingleTest/ScreenSingleTest";
import { getOldTestsAnsverData } from "./common/components/Questions/utils/gettOldTestsAnsverData";

export type ResultType = {
  currentTestId: number;
  numbCorrAnsver: number;
  numberError: number;
};
export const Context = createContext({});

function App() {
  const [result, setResult] = useState<ResultType[] | null>(
    getOldTestsAnsverData()
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider
          value={{
            setResult,
          }}
        >
          <Layout />
          <Routes>
            <Route path="/test/:id?" element={<ScreenSingleTest />} />
            <Route path="/finish" element={<ScreenFinish result={result} />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
