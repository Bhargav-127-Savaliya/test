import React, { useContext } from "react";

import { ContextData } from "../CONTEXT/ContextAPI";
import SelectInputs from "./SelectInputs";
import CountAddCard from "./CountAddCard";
import ImportExport from "./ImportExport";
import CardShow from "./CardShow";

const Main = () => {
    const { showSelected } = useContext(ContextData);


    return (
        <React.Fragment>
            {showSelected ? (<ImportExport />) : ("")}
            {showSelected ? "" : <SelectInputs />}
            <div className="">
                {showSelected && <CardShow />}
                <CountAddCard />
            </div>
        </React.Fragment>
    );
};

export default Main;
