import Add from "./components/Add";
import Greetings from "./components/Greetings";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

 
function App() {
  return (
    <Fragment>
      <Greetings/>
      <Add/>
      <h1 className="text-orange-400 text-3xl font-bold underline">
      Hello world!
    </h1>
    </Fragment>
  );
}

export default App;
