import { createContext, useState } from "react";

export const ContextData = createContext()

const ContextApi = ({ children }) => {
    const [selectedPersonal, setSelectedPersonal] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [showSelected, setShowSelected] = useState(false);
    const [countCard, setCountCard] = useState(0);
    const [companyDataArray, setCompanyDataArray] = useState([]);
    const [personalDataArray, setPersonalDataArray] = useState([]);
    const [importedData, setImportedData] = useState([]);



    const field =
    {
        personal: [
            { id: 1, name: "UserName", type: "text", relation: "personal" },
            { id: 2, name: "jobTilte", type: "text", relation: "personal" },
            { id: 3, name: "MobileNumber", type: "number", relation: "personal" },
            { id: 4, name: "EmailAddress", type: "email", relation: "personal" },
        ],
        company: [
            { id: 5, name: "CompanyName", type: "text", relation: "company" },
            { id: 6, name: "Companywebsite Url", type: "text", relation: "company" },
            { id: 7, name: "CompanyPhone Number", type: "number", relation: "company" },
            { id: 8, name: "Companyaddress", type: "text", relation: "company" },
        ]
    }


    const sortedlistperonal = selectedPersonal.sort((a, b) => (a - b))

    const sortedlistcompany = selectedCompany.sort((a, b) => (a - b))



    const handleShowSelectedClick = () => {
        setShowSelected(true);
    };
    const handleBackSelectedClick = () => {
        setShowSelected(false);
    };
    return (
        <ContextData.Provider value={{
            field, selectedPersonal, setSelectedPersonal, selectedCompany, setSelectedCompany, sortedlistperonal, sortedlistcompany, countCard, setCountCard, handleShowSelectedClick, handleBackSelectedClick, showSelected, setShowSelected, companyDataArray, setCompanyDataArray, personalDataArray, setPersonalDataArray, importedData, setImportedData
        }}>
            {children}
        </ContextData.Provider>
    )
}
export default ContextApi