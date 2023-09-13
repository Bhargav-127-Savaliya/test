import React, { useState } from 'react';
import Papa from 'papaparse';

const FieldSelect = () => {
    const [selectedPersonal, setSelectedPersonal] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [showSelected, setShowSelected] = useState(false);
    const [countCard, setCountCard] = useState(0);
    const [companyDataArray, setCompanyDataArray] = useState([]);
    const [personalDataArray, setPersonalDataArray] = useState([]);
    const [checkbox, setCheckbox] = useState(false);




    const field =
    {
        personal: [
            { id: 1, name: "UserName", type: "text", relation: "personal" },
            { id: 2, name: "jobTilte", type: "text", relation: "personal" },
            { id: 3, name: "MobileNumber", type: "number", relation: "personal" },
            { id: 4, name: "EmailAddress", type: "email", relation: "personal" },
            // { id: 4, name: "select all personal data", type: "email", relation: "personal" },
        ],
        company: [
            { id: 5, name: "CompanyName", type: "text", relation: "company" },
            { id: 6, name: "Companywebsite Url", type: "text", relation: "company" },
            { id: 7, name: "CompanyPhone Number", type: "number", relation: "company" },
            { id: 8, name: "Companyaddress", type: "text", relation: "company" },
            // { id: 4, name: "select all company data", type: "email", relation: "company" },
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
    const increment = (e) => {

        setCountCard(countCard + 1)
    }
    const decrement = () => {
        if (countCard <= 0) {
        } else {
            setCountCard(countCard - 1)
        }
    }

    const handlePersonalInputChange = (cardIndex, fieldId, newValue) => {
        // Find the index of the card data in the array, or -1 if not found
        const cardIndexInArray = personalDataArray.findIndex((card) => card.id === cardIndex);

        // Copy the existing card data or create a new one if not found
        const updatedCardData = cardIndexInArray !== -1 ? { ...personalDataArray[cardIndexInArray] } : { id: cardIndex };

        // Update the specific field value for personal details
        updatedCardData.personal = {
            ...updatedCardData.personal,
            [fieldId]: newValue,
        };

        // Update the card data array
        if (cardIndexInArray !== -1) {
            personalDataArray[cardIndexInArray] = updatedCardData;
        } else {
            setPersonalDataArray([...personalDataArray, updatedCardData]);
        }
    };

    const handleCompanyInputChange = (cardIndex, fieldId, newValue) => {
        // Find the index of the card data in the array, or -1 if not found
        const cardIndexInArray = companyDataArray.findIndex((card) => card.id === cardIndex);

        // Copy the existing card data or create a new one if not found
        const updatedCardData = cardIndexInArray !== -1 ? { ...companyDataArray[cardIndexInArray] } : { id: cardIndex };

        // Update the specific field value for company details
        updatedCardData.company = {
            ...updatedCardData.company,
            [fieldId]: newValue,
        };

        // Update the card data array
        if (cardIndexInArray !== -1) {
            companyDataArray[cardIndexInArray] = updatedCardData;
        } else {
            setCompanyDataArray([...companyDataArray, updatedCardData]);
        }

    };

    const checkedHandler = () => {
        setCheckbox(!checkbox)
    }
    // console.log(personalDataArray[0].personal[1].value);
    // console.log(companyDataArray[0].company);

    const generateCards = () => {
        const cards = [];
        for (let i = 0; i < countCard; i++) {

            cards.push(
                <div key={i}>
                    <div className=''>
                        <div id={i + 1} className='flex justify-center border lg:w-1/2 w-full mx-auto space-y-10 rounded-lg my-4 shadow-lg'>
                            <span className='absolute font-samibold text-2xl '>card {i + 1}</span>
                            <div key={i} className='border-t w-full p-4 md:flex-row flex-col '>
                                <div className='flex md:flex-row flex-col'>
                                    <div className='lg:w-1/2 w-full'>
                                        <div className=' text-3xl font-semibold'>
                                            <span>Personal detail</span>
                                        </div>
                                        <hr />
                                        <div >
                                            {
                                                sortedlistperonal.map((input, index) => (
                                                    <div key={input} className='flex  flex-col gap-2'>
                                                        <div className='flex flex-col w-full flex-wrap px-2 py-4 space-y-1'>
                                                            <label htmlFor={input} className='text-xl font-semibold'>{field.personal.find((cb) => cb.id === input)?.name}</label>
                                                            <input id={input} type={field.personal.find((cb) => cb.id === input)?.type}

                                                                className='border h-10 rounded-md px-2 py-2 outline-none'
                                                                onChange={(e) => {
                                                                    const newValue = {
                                                                        name: field.personal.find((cb) => cb.id === input)?.name,
                                                                        value: e.target.value,
                                                                    };
                                                                    handlePersonalInputChange(i + 1, input, newValue);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className='lg:w-1/2 w-full'>
                                        <div className=' text-3xl font-semibold'>
                                            <span>Company detail</span>
                                        </div>
                                        <hr />
                                        <div className='flex flex-col '>
                                            {

                                                sortedlistcompany.map((input, index) => {
                                                    return (
                                                        <div key={index} className=' gap-2' >
                                                            <div>
                                                                {
                                                                    i === 0 ? (

                                                                        <div className=' flex flex-col w-full flex-wrap px-2 py-4 space-y-1'>
                                                                            <label htmlFor={input} className='text-xl font-semibold'>{field.company.find((cb) => cb.id === input)?.name}</label>
                                                                            <input id={input} type={field.company.find((cb) => cb.id === input)?.type} name=""

                                                                                className='border h-10 rounded-md px-2 py-2 outline-none'
                                                                                onChange={(e) => {
                                                                                    const newValue = {
                                                                                        name: field.company.find((cb) => cb.id === input)?.name,
                                                                                        value: e.target.value,
                                                                                    };
                                                                                    handleCompanyInputChange(i + 1, input, newValue);
                                                                                }}

                                                                            />
                                                                        </div>
                                                                    ) :
                                                                        checkbox === false ? (
                                                                            <div className=' flex flex-col w-full flex-wrap px-2 py-4 space-y-1'>
                                                                                <label htmlFor={input} className='text-xl font-semibold'>{field.company.find((cb) => cb.id === input)?.name}</label>
                                                                                <input id={input} type={field.company.find((cb) => cb.id === input)?.type} name=""

                                                                                    className='border h-10 rounded-md px-2 py-2 outline-none'
                                                                                    onChange={(e) => {
                                                                                        const newValue = {
                                                                                            name: field.company.find((cb) => cb.id === input)?.name,
                                                                                            value: e.target.value,
                                                                                        };
                                                                                        handleCompanyInputChange(i + 1, input, newValue);
                                                                                    }}

                                                                                />
                                                                            </div>
                                                                        ) : (
                                                                            <div className=' flex flex-col w-full flex-wrap px-2 py-4 space-y-1'>
                                                                                <label htmlFor={input} className='text-xl font-semibold'>{field.company.find((cb) => cb.id === input)?.name}</label>
                                                                                <div className='border h-10 rounded-md px-2 py-2 outline-none hover:cursor-not-allowed text-gray-400'>
                                                                                    {companyDataArray[0].company[input].value}
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                }
                                                            </div>
                                                        </div>)
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    {i === 0 ? (
                                        <div className='flex flex-row items-center md:justify-end gap-2 md:w-full  w-fit py-1 px-1'>
                                            <input
                                                type="checkbox"
                                                id="copyToAllCheckbox"
                                                checked={checkbox}
                                                onChange={checkedHandler}
                                                className='border rounded-md mx-2 px-2 py-2 outline-none'
                                            />
                                            <label htmlFor="copyToAllCheckbox">Copy all company data </label>
                                        </div>

                                    ) : ""}
                                </div>
                            </div >
                        </div >
                    </div>
                </div >
            );
        }
        return cards;
    };

    return (
        <>
            <div className='my-4'>
                {showSelected ? "" : (
                    <div className='bg-gray container mx-auto gap-4 flex flex-col border px-4 py-8 rounded bg-gray-100/[0.4]'>
                        <span className='mx-4'>
                            select what contact you want to display in card
                        </span>
                        <div className='flex  flex-wrap mx-4 gap-3'>
                            <div className='flex flex-wrap md:flex-row flex-col  w-full gap-1 justify-between break-words  overflow-hidden items-center'>
                                {field.personal.map((item, index) => (
                                    <div key={item.id} className='border md:w-1/6 w-full gap-2 flex flex-wrap truncate  p-4 rounded items-center bg-white'>
                                        <input type="checkbox" id={`checkbox-${item.id}`} className='text-2xl border rounded-md p-2 outline-none' onChange={() => handlePersonalClick(item.id)} checked={selectedPersonal.includes(item.id)} />
                                        <label htmlFor={`checkbox-${item.id}`}>{item.name}</label>
                                    </div>
                                ))}
                                <div className='border md:w-1/6 w-full gap-2 flex flex-wrap truncate  p-4 rounded items-center bg-white'>
                                    <input type="checkbox" id={`checkboxallp`} className='text-2xl border rounded-md p-2 outline-none' />
                                    <label htmlFor={`checkboxallp`} >select all PersonalData</label>
                                </div>
                            </div>
                            <div className='flex flex-wrap md:flex-row flex-col  w-full gap-1 justify-between break-words  overflow-hidden items-center'>
                                {field.company.map((item, index) => (
                                    <div key={item.id} className='border md:w-1/6 w-full gap-2 flex flex-wrap truncate  p-4 rounded items-center bg-white'>
                                        <input type="checkbox" id={`checkbox-${item.id}`} className='text-2xl border rounded-md p-2 outline-none' onChange={() => handleCompanyClick(item.id)} checked={selectedCompany.includes(item.id)} />
                                        <label htmlFor={`checkbox-${item.id}`}>{item.name}</label>
                                    </div>
                                ))}
                                <div className='border md:w-1/6 w-full gap-2 flex flex-wrap truncate  p-4 rounded items-center bg-white'>
                                    <input type="checkbox" id={`checkboxallc`} className='text-2xl border rounded-md  p-2 outline-none' />
                                    <label htmlFor={`checkboxallc`}>select all companyData</label>
                                </div>
                            </div>
                        </div>
                    </div>)}

                <div className='bg-white'>
                    <div className='fixed bottom-4 md:bottom-0  w-screen flex md:justify-center justify-end z-50 '>
                        <div className='md:w-1/3 w-fit drop-shadow-md bg-white md:rounded-t-2xl md:rounded-es-none rounded-es-2xl  rounded-ss-2xl py-4 px-4 border flex flex-wrap items-center justify-between '>
                            {/* <div className='flex md:w-fit w-full justify-center border'>
                            </div> */}
                            <div className='flex w-full md:flex-row flex-col justify-between md:space-x-4 flex-wrap'>
                                <button className='rounded-md bg-red-400 text-white px-4 py-2  ' onClick={handleBackSelectedClick}>Back</button>
                                <div className='flex justify-end md:space-x-4  flex-col md:flex-row'>
                                    <div className='flex '>
                                        <div className='flex border rounded-lg justify-center '>
                                            <button onClick={decrement} className=' px-4 py-1 text-2xl text-black font-bold rounded-l-md'>-</button>
                                            <div className='flex items-center px-4 font-bold border-x shadow-inner'>
                                                {countCard}
                                            </div>
                                            <button onClick={increment} className='outline-none px-4 py-1 text-2xl text-black font-bold rounded-r-md active:bg-gray-100'>+</button>
                                        </div>
                                    </div>
                                    <button className='rounded-md bg-green-400 text-white px-4 py-2 ' onClick={handleShowSelectedClick}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {showSelected && generateCards()}
                </div>
            </div >

        </>
    )
}

export default FieldSelect

