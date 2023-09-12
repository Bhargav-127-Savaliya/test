import React, { useContext, useState } from "react";
import { data } from "../Contex/ContexAPI"; // Corrected the import path

const Details = (props) => {
    const { checkboxes, selectedCheckboxesforpersonal, setSelectedCheckboxesforpersonal, selectedCheckboxesforcompany, setSelectedCheckboxesforcompany } = useContext(data);

    // State to keep track of the "Select All" checkbox status
    const [selectAllPersonal, setSelectAllPersonal] = useState(false);
    const [selectAllCompany, setSelectAllCompany] = useState(false);

    // Function to handle "Select All" checkbox for personal
    const handleSelectAllPersonal = () => {
        setSelectAllPersonal(!selectAllPersonal);
        if (!selectAllPersonal) {
            setSelectedCheckboxesforpersonal(checkboxes.personal.map(checkbox => checkbox.id));
        } else {
            setSelectedCheckboxesforpersonal([]);
        }
    };

    // Function to handle "Select All" checkbox for company
    const handleSelectAllCompany = () => {
        setSelectAllCompany(!selectAllCompany);
        if (!selectAllCompany) {
            setSelectedCheckboxesforcompany(checkboxes.company.map(checkbox => checkbox.id));
        } else {
            setSelectedCheckboxesforcompany([]);
        }
    };

    const handleCheckboxChangeforpersonal = (checkboxId) => {
        if (selectedCheckboxesforpersonal.includes(checkboxId)) {
            setSelectedCheckboxesforpersonal(selectedCheckboxesforpersonal.filter((id) => id !== checkboxId));
        } else {
            setSelectedCheckboxesforpersonal([...selectedCheckboxesforpersonal, checkboxId]);
        }
    };

    const handleCheckboxChangeforcompany = (checkboxId) => {
        if (selectedCheckboxesforcompany.includes(checkboxId)) {
            setSelectedCheckboxesforcompany(selectedCheckboxesforcompany.filter((id) => id !== checkboxId));
        } else {
            setSelectedCheckboxesforcompany([...selectedCheckboxesforcompany, checkboxId]);
        }
    };

    return (
        <React.Fragment>
            <div className="flex-col min-h-screen bg-gray-100">
                <div className="font-bold text-3xl mx-8 py-3 text-blue-900">
                    <h1 className="hover:text-blue-700 transition-colors duration-300">Details To Be Printed</h1>
                </div>
                <div className="font-bold text-2xl mx-8 py-3 text-blue-900">
                    <h4 className="hover:text-blue-700 transition-colors duration-300">Printed Contact Information</h4>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mx-8 mt-4">
                    <div className="selectAll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
                        {/* "Select All" checkbox for personal */}
                        <div>
                            <div className={`bg-gray-100 p-4 m-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${selectAllPersonal ? 'bg-purple-400 text-white shadow-md' : ''}`} onClick={handleSelectAllPersonal}>
                                <input
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 accent-purple-600 bg-gray-100 border-gray-300 rounded opacity-0 absolute"
                                    checked={selectAllPersonal}
                                />
                                <label className="ml-2 text-sm font-medium text-gray-900">Select All Personal Fields</label>
                            </div>
                        </div>

                        {/* "Select All" checkbox for company */}
                        <div>
                            <div className={`bg-gray-100 p-4 m-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${selectAllCompany ? 'bg-purple-400 text-white shadow-md' : ''}`} onClick={handleSelectAllCompany}>
                                <input
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 accent-purple-600 bg-gray-100 border-gray-300 rounded opacity-0 absolute"
                                    checked={selectAllCompany}
                                />
                                <label className="ml-2 text-sm font-medium text-gray-900">Select All Company Fields</label>
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <h1 className="text-2xl text-blue-900">Select what you want on the form</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        {checkboxes.personal.map((checkbox) => (
                            <div key={checkbox.id}>
                                <div className={`bg-gray-100 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${selectedCheckboxesforpersonal.includes(checkbox.id) ? 'bg-purple-400 text-white shadow-md' : ''}`} onClick={() => handleCheckboxChangeforpersonal(checkbox.id)}>
                                    <input
                                        id={checkbox.id}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 accent-purple-600 bg-gray-100 border-gray-300 rounded opacity-0 absolute"
                                        checked={selectedCheckboxesforpersonal.includes(checkbox.id)}
                                    />
                                    <label htmlFor={checkbox.id} className="ml-2 text-sm font-medium text-gray-900">{checkbox.name}</label>
                                </div>
                            </div>
                        ))}
                        {checkboxes.company.map((checkbox) => (
                            <div key={checkbox.id}>
                                <div className={`bg-gray-100 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${selectedCheckboxesforcompany.includes(checkbox.id) ? 'bg-purple-400 text-white shadow-md' : ''}`} onClick={() => handleCheckboxChangeforcompany(checkbox.id)}>
                                    <input
                                        id={checkbox.id}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 accent-purple-600 bg-gray-100 border-gray-300 rounded opacity-0 absolute"
                                        checked={selectedCheckboxesforcompany.includes(checkbox.id)}
                                    />
                                    <label htmlFor={checkbox.id} className="ml-2 text-sm font-medium text-gray-900">{checkbox.name}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Details;
