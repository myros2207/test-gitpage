import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Component/HomePage";
import TestOtherPage from "./Component/TestOtherPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path={"/"} element={
            <HomePage></HomePage>
          }></Route>
          <Route path={"/test"} element={
            <TestOtherPage></TestOtherPage>
          }>
          </Route>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
