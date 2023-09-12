import React, { useContext, useState } from 'react'
import { ContextData } from '../Context/ContextApi'

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
            <div className='bg-gray container mx-auto gap-4 flex flex-col border px-4 py-8 rounded bg-gray-100/[0.4]'>
                <span className='mx-4'>
                    select what contact you want to display in card
                </span>
                <div className='flex  flex-wrap mx-4 gap-3'>
                    <div className='flex flex-wrap md:flex-row flex-col  w-full gap-1 justify-between break-words  overflow-hidden items-center'>
                        {field.personal.map((item, index) => (
                            <div key={item.id} className='border md:w-1/6 w-full gap-2 flex  truncate h-14 rounded items-center bg-white'>
                                <input type="checkbox" id={`checkbox-${item.id}`} className='text-2xl border-none  rounded-r-full h-full w-1/6  md:w-1/5 drop-shadow-lg ring-offset-0 outline-none' onChange={() => handlePersonalClick(item.id)} checked={selectedPersonal.includes(item.id)} />
                                <label htmlFor={`checkbox-${item.id}`} className='w-full pl-1 h-full flex items-center'>{item.name}</label>
                            </div>
                        ))}
                        <div className='border md:w-1/6 w-full gap-2 flex  truncate  h-14 rounded items-center bg-white'>
                            <input type="checkbox" id={`checkboxallp`} className='text-2xl border-none  rounded-r-full h-full w-1/6  md:w-1/5 drop-shadow-lg ring-offset-0 outline-none' />
                            <label htmlFor={`checkboxallp`} className='w-full pl-1 h-full flex items-center ' >select all PersonalData</label>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-row flex-col  w-full gap-1 justify-between break-words  overflow-hidden items-center'>
                        {field.company.map((item, index) => (
                            <div key={item.id} className='border md:w-1/6 w-full gap-2 flex  truncate  h-14  rounded items-center bg-white'>
                                <input type="checkbox" id={`checkbox-${item.id}`} className='text-2xl border-none  rounded-r-full h-full w-1/6  md:w-1/5 drop-shadow-lg ring-offset-0 outline-none' onChange={() => handleCompanyClick(item.id)} checked={selectedCompany.includes(item.id)} />
                                <label htmlFor={`checkbox-${item.id}`} className='w-full pl-1 h-full flex items-center'>{item.name}</label>
                            </div>
                        ))}
                        <div className='border md:w-1/6 w-full gap-2 flex  truncate  h-14 rounded items-center bg-white' >
                            <input type="checkbox" id={`checkboxallc`} onClick={allCSchecked} className='text-2xl border-none  rounded-r-full h-full w-1/6  md:w-1/5 drop-shadow-lg ring-offset-0 outline-none' />
                            <label htmlFor={`checkboxallc`} className='w-full pl-1 h-full flex items-center'>select all companyData</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectInputs