import './App.css';
import Details from './components/PrintDetail';
import FormDetail from './components/Form';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextAPI from './Contex/ContexAPI';
import FooterGroup from './components/Foot';
import React, { useState } from 'react';
// import NewLogic from "./components/NewLogic"
function App() {
  const [setme, setsetme] = useState(true);
  const [countdata, setCountdata] = useState(0);
  function tog1() {
    if (setme===true) {
      setsetme(false)
    }
  }
  function tog2() {
    if (setme===false) {
      setsetme(true)
    }
  }
  function data(params) {
    // console.log(params);
    setCountdata(params);

  }
  return (
    <React.Fragment>
      <ContextAPI>
      {setme ? <Details /> :
      <FormDetail countdatas={countdata} />}
      </ContextAPI>
      <FooterGroup data={data} show={tog1} hide={tog2}/>
       {/* <NewLogic/> */}
    </React.Fragment>
  );
}

export default App;