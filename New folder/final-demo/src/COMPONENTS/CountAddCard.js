import React, { useContext } from 'react'
import { ContextData } from '../CONTEXT/ContextAPI';

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
        <div className='text-sm'>
            <div className="bg-white">
                    <div className="flex justify-center items-center absolute bottom-0 ml-4 sm:ml-60">
                        <div className="flex w-full md:flex-row flex-col justify-between md:space-x-4 flex-wrap">
                            <button
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                onClick={handleBackSelectedClick}
                            >
                                Back
                            </button>
                            <div className="flex justify-end md:space-x-4  flex-col md:flex-row">
                                <div className="flex justify-center items-center">
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                        onClick={decrement}
                                    >
                                        -
                                    </button>
                                    <h1 className="bg-gray-300 text-gray-800 font-bold py-2 px-4">{countCard}</h1>
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                                        onClick={increment}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    onClick={handleShowSelectedClick}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CountAddCard 