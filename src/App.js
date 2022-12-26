import './App.css';
import Home from "./Component/Home/Home";
import Navs from "./Component/Home/Nav/Nav";
import {Fragment} from "react";

function App() {
  return (
      <Fragment>
          <Navs/>
          <Home/>
      </Fragment>
  );
}

export default App;
