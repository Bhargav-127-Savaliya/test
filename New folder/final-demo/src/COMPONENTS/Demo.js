import React, { useContext } from "react";

import { ContextData } from "../CONTEXT/ContextAPI";
import SelectInputs from "./SelectInputs";
import CountAddCard from "./CountAddCard";
import ImportExport from "./ImportExport";
import CardShow from "./CardShow";

const FieldSelect = () => {
    const { showSelected } = useContext(ContextData);


    return (
        <>
            {showSelected ? (<ImportExport />) : ("")}
            {showSelected ? "" : <SelectInputs />}
            <div className="">
                {showSelected && <CardShow />}
                <CountAddCard />
            </div>
        </>
    );
};

export default FieldSelect;
