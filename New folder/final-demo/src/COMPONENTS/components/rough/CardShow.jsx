import React, { useContext } from 'react'
import { ContextData } from '../../Context/ContextApi';
import { Link } from 'react-router-dom';

const CardShow = () => {
    const { sortedlist, field, addmul } = useContext(ContextData);

    return (
        <div>
            cardshow
            <Link to='/'>home</Link>
            <div className='container mx-auto flex border gap-4 flex-wrap justify-evenly'>
                {
                    sortedlist.map((input, index) => (
                        <div key={index} className='w-1/3 float flex  flex-col gap-2'>
                            <div className='border flex flex-col w-full flex-wrap'>
                                <label>{field.find((cb) => cb.id === input)?.name}</label>
                                <input type={field.find((cb) => cb.id === input)?.type} name="" id="" className='border ' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CardShow