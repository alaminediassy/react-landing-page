import './App.css';
import Home from "./Component/Home/Home";
import Navs from "./Component/Home/Nav/Nav";
import {Fragment} from "react";
import Services from "./Component/Home/Services/Services";


function App() {
  return (
      <Fragment>
          <Navs/>
          <Home/>
          <Services/>
      </Fragment>
  );
}

export default App;
