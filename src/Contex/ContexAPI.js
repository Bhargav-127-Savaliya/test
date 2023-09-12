import { createContext, useState } from "react";

export const data = createContext();
const ContextAPI = ({ children }) => {
    const checkboxes = 
        {
            personal : [
                { id: 1, name: 'Name' },
                { id: 2, name: 'Job Title' },
                { id: 3, name: 'Mobile Number' },
                { id: 4, name: 'Email Address' },
            ],
            company : [
                { id: 5, name: 'Company Name' },
                { id: 6, name: 'Company Website URL' },
                { id: 7, name: 'Company Address' },
                { id: 8, name: 'Company Phone Number' },
            ]
        }
    ;
// console.log(checkboxes.company);
    const [selectedCheckboxesforpersonal, setSelectedCheckboxesforpersonal] = useState([]);
    const [selectedCheckboxesforcompany, setSelectedCheckboxesforcompany] = useState([]);
    return <data.Provider value={{ checkboxes , selectedCheckboxesforpersonal, setSelectedCheckboxesforpersonal , selectedCheckboxesforcompany, setSelectedCheckboxesforcompany }}>
        {children}
    </data.Provider>
}

export default ContextAPI;