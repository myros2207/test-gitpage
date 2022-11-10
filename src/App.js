import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Component/HomePage";
import TestOtherPage from "./Component/TestOtherPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={
            <HomePage></HomePage>
          }></Route>
          <Route path={"/test"} element={
            <TestOtherPage></TestOtherPage>
          }>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
