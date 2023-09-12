import React, { useEffect, useState } from 'react'

const FieldSelect = () => {
    const [selectedPersonal, setSelectedPersonal] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [showSelected, setShowSelected] = useState(false);
    const [countCard, setCountCard] = useState(1);


    const field =
    {
        personal: [
            { id: 1, name: "User Name", type: "text", value: "", relation: "personal" },
            { id: 2, name: "job Tilte", type: "text", value: "", relation: "personal" },
            { id: 3, name: "Mobile Number", type: "number", value: "", relation: "personal" },
            { id: 4, name: "Email Address", type: "email", value: "", relation: "personal" },
        ],
        company: [
            { id: 5, name: "Company Name", type: "text", value: "", relation: "company" },
            { id: 6, name: "Company website Url", type: "text", value: "", relation: "company" },
            { id: 7, name: "Company address", type: "text", value: "", relation: "company" },
            { id: 8, name: "Company Phone Number", type: "number", value: "", relation: "company" },
        ]
    }


    const sortedlistperonal = selectedPersonal.sort((a, b) => (a - b))
    console.log(sortedlistperonal);
    const sortedlistcompany = selectedCompany.sort((a, b) => (a - b))
    console.log(sortedlistcompany);


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
    const increment = () => {
        setCountCard(countCard + 1)
    }
    const decrement = () => {
        setCountCard(countCard - 1)
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }


    const [companyData, setCompanyData] = useState(Array(countCard).fill({}));
    const [copyToAllChecked, setCopyToAllChecked] = useState(false);
    const [firstCardCompanyData, setFirstCardCompanyData] = useState({});
    console.log(firstCardCompanyData);
    useEffect(() => {
        if (copyToAllChecked) {
            // When "Copy to All" is checked, update the first card's data with current input values
            setFirstCardCompanyData({ ...companyData });
        }
    }, [copyToAllChecked, companyData]);

    const handleCopyToAll = () => {
        setCopyToAllChecked(!copyToAllChecked);
    };
    const handleCompanyInputChange = (inputId, value, cardIndex) => {
        if (copyToAllChecked) {
            setCompanyData((prevData) => ({
                ...prevData,
                [field.company.find((cb) => cb.id === inputId)?.name]: value,
            }));
        } else {
            setCompanyData((prevData) => ({
                ...prevData,
                [field.company.find((cb) => cb.id === inputId)?.name]: value,
            }));
        }
    };

    console.log(companyData);
    const generateCards = () => {
        const cards = [];
        for (let i = 0; i < countCard; i++) {
            cards.push(
                <div className='flex justify-center border w-1/2 mx-auto space-y-10 rounded-lg my-4'>
                    <span className='absolute font-samibold text-2xl '>card {i + 1}</span>
                    <div key={i} className='flex border-t w-full px-4 py-2'>
                        <div className='mx-auto w-1/2'>
                            <div className=' text-3xl font-semibold'>
                                <span>Personal detail</span>
                            </div>
                            <div >
                                {
                                    sortedlistperonal.map((input, index) => (
                                        <div key={index} className='flex  flex-col gap-2'>
                                            <div className='flex flex-col w-full flex-wrap px-2 py-4'>
                                                <label htmlFor={input} className='text-xl font-semibold'>{field.personal.find((cb) => cb.id === input)?.name}</label>
                                                <input id={input} type={field.personal.find((cb) => cb.id === input)?.type} className='border h-10' />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className=' text-3xl font-semibold'>
                                <span>Company detail</span>
                            </div>
                            <div className=' '>
                                <form onSubmit={submitHandler}>
                                    {
                                        i === 0 ? sortedlistcompany.map((input, index) => (
                                            <div key={index} className=' gap-2'>
                                                <div className=' flex flex-col w-full flex-wrap px-2 py-4'>
                                                    <label htmlFor={input} className='text-xl font-semibold'>{field.company.find((cb) => cb.id === input)?.name}</label>
                                                    <input id={input} type={field.company.find((cb) => cb.id === input)?.type} name="" className='border h-10' onChange={(e) => handleCompanyInputChange(input, e.target.value, handleCopyToAll)} />

                                                </div>
                                            </div>
                                        )) :
                                            sortedlistcompany.map((input, index) => (
                                                <div key={index} className=' gap-2'>
                                                    <div className=' flex flex-col w-full flex-wrap px-2 py-4'>
                                                        <label htmlFor={input} className='text-xl font-semibold'>{field.company.find((cb) => cb.id === input)?.name}</label>
                                                        <input id={input} type={field.company.find((cb) => cb.id === input)?.type} name="" className='border h-10' value={copyToAllChecked ? companyData[field.company.find((cb) => cb.id === input)?.name] : null}
                                                            onChange={(e) => handleCompanyInputChange(input, e.target.value)} />

                                                    </div>
                                                </div>
                                            ))
                                    }
                                </form>
                                {i === 0 ? (
                                    <div className='flex items-center gap-2'>
                                        <input
                                            type="checkbox"
                                            id="copyToAllCheckbox"
                                            checked={copyToAllChecked}
                                            onClick={handleCopyToAll}
                                        />
                                        <label htmlFor="copyToAllCheckbox">Copy to all</label>
                                    </div>
                                ) : ""}

                            </div>
                        </div>
                    </div>
                </div>
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
                        <div className='flex flex-wrap justify-between gap-4  mx-4'>
                            {field.personal.map((item, index) => (
                                <div key={index} className='border w-1/5 space-x-4  mt-4 p-4 rounded flex items-center bg-white'>
                                    <input type="checkbox" id={`checkbox-${item.id}`} className='text-2xl w-4 h-4' onChange={() => handlePersonalClick(item.id)} checked={selectedPersonal.includes(item.id)} />
                                    <label htmlFor={`checkbox-${item.id}`}>{item.name}</label>
                                </div>
                            ))}
                            {field.company.map((item, index) => (
                                <div key={index} className='border w-1/5 space-x-4  mt-4 p-4 rounded flex items-center bg-white'>
                                    <input type="checkbox" id={`checkbox-${item.id}`} className='text-2xl w-4 h-4' onChange={() => handleCompanyClick(item.id)} checked={selectedCompany.includes(item.id)} />
                                    <label htmlFor={`checkbox-${item.id}`}>{item.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>)}
                <div>
                    <div className='fixed bottom-0 w-screen flex justify-center'>
                        <div className='w-1/2 drop-shadow-md bg-white rounded-t-2xl py-4 px-4 border flex items-center justify-between '>
                            <div className='flex gap-4 h-full'>
                                <button className='border rounded-md bg-red-200 px-4' onClick={handleBackSelectedClick}>Back</button>
                            </div>
                            <div className='flex'>
                                <button onClick={increment} className=' px-4 py-1 text-2xl text-white font-bold rounded-l-md bg-green-400 '>+</button>
                                <div className='flex border-y items-center px-4 '>
                                    {countCard}
                                </div>
                                <button onClick={decrement} className=' px-4 py-1 text-2xl text-white font-bold rounded-r-md bg-red-400 '>-</button>
                                <button className='border ml-6 rounded-md bg-green-200 px-4' onClick={handleShowSelectedClick}>Continue</button>
                            </div>
                        </div>
                    </div>

                    {showSelected && generateCards()}

                </div>

            </div>

            <div className='fixed bottom-0 w-screen flex justify-center'>
                <div className='w-1/2 drop-shadow-md bg-white rounded-t-2xl py-4 px-4 border flex items-center justify-between '>
                    <div className='flex gap-4 h-full'>
                        <button className='border rounded-md bg-red-200 px-4' onClick={handleBackSelectedClick}>Back</button>
                    </div>
                    <div className='flex'>
                        <button onClick={increment} className=' px-4 py-1 text-2xl text-white font-bold rounded-l-md bg-green-400 '>+</button>
                        <div className='flex border-y items-center px-4 '>
                            {countCard}
                        </div>
                        <button onClick={decrement} className=' px-4 py-1 text-2xl text-white font-bold rounded-r-md bg-red-400 '>-</button>
                        <button className='border ml-6 rounded-md bg-green-200 px-4' onClick={handleShowSelectedClick}>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FieldSelect
