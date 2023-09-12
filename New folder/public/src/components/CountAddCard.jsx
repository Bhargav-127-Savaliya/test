import React, { useContext } from 'react'
import { ContextData } from '../Context/ContextApi';

const CountAddCard = () => {
    const { setShowSelected, setCountCard, countCard } = useContext(ContextData)
    const handleShowSelectedClick = () => {
        setShowSelected(true);
    };
    const handleBackSelectedClick = () => {
        setShowSelected(false);
    };

    const increment = (e) => {
        setCountCard(countCard + 1);
    };
    const decrement = () => {
        if (countCard <= 0) {
        } else {
            setCountCard(countCard - 1);
        }
    };

    return (
        <div className=''>
            <div className="bg-white">
                <div className="fixed bottom-4 md:bottom-0  right-0 md:w-screen w-fit flex md:justify-center  ">
                    <div className="md:w-1/3 w-fit drop-shadow-md bg-white md:rounded-t-2xl md:rounded-es-none rounded-es-2xl  rounded-ss-2xl py-4 px-4 border flex flex-wrap items-center justify-between ">
                        <div className="flex w-full md:flex-row flex-col justify-between md:space-x-4 flex-wrap">
                            <button
                                className="rounded-md bg-red-400 text-white px-4 py-2  "
                                onClick={handleBackSelectedClick}
                            >
                                Back
                            </button>
                            <div className="flex justify-end md:space-x-4  flex-col md:flex-row">
                                <div className="flex ">
                                    <div className="flex border rounded-lg justify-center ">
                                        <button
                                            onClick={decrement}
                                            className=" px-4 py-1 text-2xl text-black font-bold rounded-l-md"
                                        >
                                            -
                                        </button>
                                        <div className="flex items-center px-4 font-bold border-x shadow-inner">
                                            {countCard}
                                        </div>
                                        <button
                                            onClick={increment}
                                            className="outline-none px-4 py-1 text-2xl text-black font-bold rounded-r-md active:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="rounded-md bg-green-400 text-white px-4 py-2 "
                                    onClick={handleShowSelectedClick}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountAddCard 