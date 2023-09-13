import React, { useContext, useState } from 'react'
import { ContextData } from '../CONTEXT/ContextAPI'

const Card = ({ i, checkHandler, checkbox, handlePersonalInputChange, handleCompanyInputChange }) => {

    const { field, sortedlistcompany, sortedlistperonal, importedData, companyDataArray } = useContext(ContextData)

    const [data, setData] = useState(companyDataArray)
    // console.log(checkbox);
    return (
        <div className='flex justify-center my-10 '>
            <div className='flex border container w-full flex-col rounded-md p-4'>
                <div className=' text-center text-3xl'>card-{i + 1}</div>
                <div className='w-full flex md:flex-row flex-col py-4 '>
                    <div className='md:w-1/2 w-full md:px-4 '>
                        <div className='text-2xl text-left md:text-center border-b-2'>
                            Personal Detail
                        </div>
                        {sortedlistperonal.map((input, index) => (
                            <div key={index} className='flex flex-col gap-y-2 '>
                                <label htmlFor="" className='text-xl font-semibold'>{field.personal.find((cb) => cb.id === input)?.name}</label>
                                <input type="text" className='rounded-md' onChange={(e) => { const newValue = { name: field.personal.find((cb) => cb.id === input)?.name, value: e.target.value, }; handlePersonalInputChange(i + 1, input, newValue); }}
                                    value={importedData[i]?.[field.personal.find((cb) => cb.id === input)?.name] || undefined} />
                            </div>
                        ))}
                    </div>
                    <div className='md:w-1/2 w-full '>
                        <div className='text-2xl text-left md:text-center border-b-2'>
                            Company Detail
                        </div>
                        {sortedlistcompany.map((input, index) => {
                            return (
                                <div key={index} className=" gap-2">
                                    <div>
                                        {i === 0 ? (
                                            <div className="flex flex-col gap-y-2  ">
                                                <label htmlFor="" className='text-xl font-semibold'>{field.company.find((cb) => cb.id === input)?.name}</label>
                                                <input id={input} className='rounded-md' type={field.company.find((cb) => cb.id === input)?.type}
                                                    value={importedData[i]?.[field.company.find((cb) => cb.id === input)?.name] || undefined}
                                                    onChange={(e) => {
                                                        const newValue = {
                                                            name: field.company.find((cb) => cb.id === input)?.name,
                                                            value: e.target.value,
                                                        };
                                                        handleCompanyInputChange(
                                                            i + 1, input, newValue
                                                        );
                                                    }} />
                                            </div>
                                        ) :
                                            checkbox === false ? (
                                                <div className=" flex flex-col gap-y-2">
                                                    <label htmlFor="" className='text-xl font-semibold'>{field.company.find((cb) => cb.id === input)?.name}</label>
                                                    <input id={input}
                                                        type={field.company.find((cb) => cb.id === input)?.type}
                                                        defaultValue={importedData[i]?.[field.company.find((cb) => cb.id === input)?.name] || null}
                                                        className='rounded-md'
                                                        onChange={(e) => {
                                                            const newValue = {
                                                                name: field.company.find((cb) => cb.id === input)?.name,
                                                                value: e.target.value,
                                                            };
                                                            handleCompanyInputChange(i + 1, input, newValue);
                                                        }} />
                                                </div>

                                            ) : (
                                                <div className="flex flex-col gap-y-2">
                                                    <label htmlFor="" className='text-xl font-semibold'>{field.company.find((cb) => cb.id === input)?.name}</label>
                                                    <div className="border h-10 rounded-md px-2 py-2 outline-none hover:cursor-not-allowed text-gray-400">
                                                        {companyDataArray[0]?.company[input]?.value}
                                                    </div>
                                                </div>
                                            )}

                                    </div>
                                </div>
                            );
                        })}
                        {
                            i === 0 ?
                                (<div className=' flex items-center py-2 gap-3'>
                                    <input type="checkbox" id={`check${i}`} className='rounded-md p-2' checked={checkbox} onChange={checkHandler} />
                                    <label htmlFor={`check${i}`}>Copy Company Data To All Card</label>
                                </div>) : ("")
                        }

                    </div>
                </div>
                <div className='w-full justify-center flex'>
                    <button type='reset' className='px-2 py-2 border border-red-600 rounded-md font-semibold'>reset</button>
                </div>
            </div>
        </div>
    )
}

export default Card