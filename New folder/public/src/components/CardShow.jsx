import React, { useContext, useEffect, useState } from 'react'
import { ContextData } from '../Context/ContextApi';
import Card from './Card';

const CardShow = () => {
    const { countCard, importedData, personalDataArray, setPersonalDataArray, companyDataArray, setCompanyDataArray, sortedlistperonal, field, sortedlistcompany } = useContext(ContextData)
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox);
    const handlePersonalInputChange = (cardIndex, fieldId, newValue) => {
        const cardIndexInArray = personalDataArray.findIndex(
            (card) => card.id === cardIndex
        );
        const updatedCardData =
            cardIndexInArray !== -1
                ? { ...personalDataArray[cardIndexInArray] }
                : { id: cardIndex };

        updatedCardData.personal = {
            ...updatedCardData.personal,
            [fieldId]: newValue,
        };

        if (cardIndexInArray !== -1) {
            personalDataArray[cardIndexInArray] = updatedCardData;
        } else {
            setPersonalDataArray([...personalDataArray, updatedCardData]);
        }
    };


    const handleCompanyInputChange = (cardIndex, fieldId, newValue) => {
        const cardIndexInArray = companyDataArray.findIndex(
            (card) => card.id === cardIndex
        );

        const updatedCardData =
            cardIndexInArray !== -1 ? { ...companyDataArray[cardIndexInArray] }
                : { id: cardIndex };

        updatedCardData.company = {
            ...updatedCardData.company,
            [fieldId]: newValue,
        };

        if (cardIndexInArray !== -1) {
            companyDataArray[cardIndexInArray] = updatedCardData;
        } else {
            setCompanyDataArray([...companyDataArray, updatedCardData]);
        }
        
    };
    console.log(companyDataArray,personalDataArray);
    const checkHandler = () => { setCheckbox(!checkbox) }

    const generateCards = () => {
        const cards = [];
        for (let i = 0; i < countCard; i++) {
            cards.push(
                <form key={i} onSubmit={(e) => { e.preventDefault(); }} className='mt-10'>
                    <Card i={i} key={i} importedData={importedData} checkHandler={checkHandler} checkbox={checkbox} handlePersonalInputChange={handlePersonalInputChange} handleCompanyInputChange={handleCompanyInputChange} />
                </form>
            );
        }
        return cards;
    };

    return (
        <>
            {generateCards()}
            {/*  */}
        </>
    )
}

export default CardShow