import React, { useContext, useState } from 'react'
import { ContextData } from '../CONTEXT/ContextAPI'

const SelectInputs = () => {
    const { field, setSelectedPersonal, selectedCompany, setSelectedCompany, selectedPersonal } = useContext(ContextData)
    const [checkCompanyall, setCheckCompanyAll] = useState(false)
    
    const handlePersonalClick = (id) => {
        if (selectedPersonal.includes(id)) {
            setSelectedPersonal(selectedPersonal.filter((fid) => fid !== id));
        }
        else {
            setSelectedPersonal([...selectedPersonal, id]);
        }
    }
    
    const handleCompanyClick = (id) => {
        if (selectedCompany.includes(id)) {
            setSelectedCompany(selectedCompany.filter((fid) => fid !== id));
        }
        else {
            setSelectedCompany([...selectedCompany, id]);
        }
    }
    
    const allCSchecked = () => {
        setCheckCompanyAll(!checkCompanyall)
    }

    return (
        <div className=''>
            <div className='flex-col min-h-screen bg-gray-100'>
            <div className="font-bold text-3xl mx-8 py-3 text-blue-900">
                    <h1 className="hover:text-blue-700 transition-colors duration-300">Details To Be Printed</h1>
                </div>
                <div className="font-bold text-2xl mx-8 py-3 text-blue-900">
                    <h4 className="hover:text-blue-700 transition-colors duration-300">Printed Contact Information</h4>
                </div>
                
                <div className='flex  flex-wrap mx-4 gap-3'>
                    <div className='flex flex-wrap md:flex-row flex-col gap-1 justify-between break-words  overflow-hidden items-center'>
                    {field.personal.map((checkbox) => (
                            <div key={checkbox.id}>
                                <div className={`bg-gray-100 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform border-2 border-sky-500 hover:scale-105 ${selectedPersonal.includes(checkbox.id) ? 'bg-purple-400 text-white shadow-md' : ''}`} onClick={() => handlePersonalClick(checkbox.id)}>
                                    <input
                                        id={checkbox.id}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 accent-purple-600 bg-gray-100 border-gray-300 rounded opacity-0 absolute"
                                        checked={selectedPersonal.includes(checkbox.id)}
                                    />
                                    <label htmlFor={checkbox.id} className="ml-2 text-sm font-medium text-gray-900">{checkbox.name}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-wrap md:flex-row flex-col gap-1 justify-between break-words  overflow-hidden items-center '>
                    {field.company.map((checkbox) => (
                            <div key={checkbox.id}>
                                <div className={`bg-gray-100 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform border-2 border-sky-500 hover:scale-105 ${selectedCompany.includes(checkbox.id) ? 'bg-purple-400 text-white shadow-md' : ''}`} onClick={() => handleCompanyClick(checkbox.id)}>
                                    <input
                                        id={checkbox.id}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 accent-purple-600 bg-gray-100 border-gray-300 rounded opacity-0 absolute"
                                        checked={selectedPersonal.includes(checkbox.id)}
                                    />
                                    <label htmlFor={checkbox.id} className="ml-2 text-sm font-medium text-gray-900">{checkbox.name}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectInputs;
