import React, { useContext } from 'react'
import { ContextData } from '../../Context/ContextApi'
import { Link } from 'react-router-dom'

const Count = () => {
    const { countCard, setCountCard, handleBackSelectedClick, handleShowSelectedClick } = useContext(ContextData)
    const increment = () => {
        setCountCard(countCard + 1)
    }
    const decrement = () => {
        setCountCard(countCard - 1)
    }
    return (
        <div>

            <div>
                {/* <Link to="/">home</Link> */}
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
        </div>
    )
}

export default Count