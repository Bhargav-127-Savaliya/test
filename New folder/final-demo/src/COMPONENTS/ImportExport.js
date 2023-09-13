import React, { useContext, useRef, useState } from 'react'
import { ContextData } from '../CONTEXT/ContextAPI';
import Papa from "papaparse";
import Model from './Model';

const ImportExport = () => {
    const { countCard, field, personalDataArray, companyDataArray, setImportedData, importedData, setCountCard } = useContext(ContextData)
    const [switchExp, setSwitchExp] = useState(true);

    const generateCsvData = () => {
        const csvData = [];
        for (let i = 0; i < countCard; i++) {
            const cardData = {
                "CNo": i + 1,
            };

            field.personal.forEach((field) => {
                const fieldName = `${field.name}`;
                const fieldValue =
                    personalDataArray[i]?.personal[field.id]?.value || "";
                cardData[fieldName] = fieldValue;
            });

            field.company.forEach((field) => {
                const fieldName = `${field.name}`;
                const fieldValue = companyDataArray[i]?.company[field.id]?.value || "";
                cardData[fieldName] = fieldValue;
            });

            csvData.push(cardData);
        }

        return csvData;
    };
    const handleExportClick = () => {
        const csvData = generateCsvData();

        const csvString = Papa.unparse(csvData);

        const blob = new Blob([csvString], { type: "text/csv" });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "card_data.csv";

        a.click();

        window.URL.revokeObjectURL(url);
    };
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const csvString = event.target.result;
                Papa.parse(csvString, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        setImportedData(result.data);
                    },
                    error: (error) => {
                        console.error("CSV parsing error:", error.message);
                    },
                });
            };
            reader.readAsText(file);
        }
        setSwitchExp(false);

    };

    return (
        <div className="flex flex-row h-40 ">
            <div className='container  md:p-0 mx-auto flex flex-col md:flex-row justify-center md:justify-between md:items-center p-4 space-y-4'>
                <div className=' flex flex-col space-y-3'>
                    <span className=' w-fit text-3xl'>
                        Add your card details
                    </span>
                    <span className=' w-1/2 h-20 overflow-hidden hidden md:block'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima a accusantium inventore earum perferendis quae voluptatibus itaque veritatis quod repellat.
                    </span>
                </div>
                <div className=''>
                    <Model handleFileInputChange={handleFileInputChange} handleExportClick={handleExportClick} />
                </div>
            </div>
        </div>
    )
}

export default ImportExport