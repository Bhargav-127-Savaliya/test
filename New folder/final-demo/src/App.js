import React from "react";
import ContextApi from "./CONTEXT/ContextAPI";
import Main from "./COMPONENTS/Main";

const App = (props) => {
  return (
    <React.Fragment>
        <ContextApi>
          <Main/>
        </ContextApi>
    </React.Fragment>
  )
};

export default App;
