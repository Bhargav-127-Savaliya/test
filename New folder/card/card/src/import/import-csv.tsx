import React, { useRef, useState } from "react";
import { ImportProps } from "../interfaces/import-interface";
import { CardData } from "../interfaces/interfaces";
import CSVReader from "react-csv-reader";
import {
  companyInfoOptions,
  contactInfoOptions,
} from "../info-options/options";

const Import: React.FC<ImportProps> = ({ option, handleImportedData }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [importedFileName, setImportedFileName] = useState<string | null>(null);

  const processCSVData = (data: any[]) => {
    const processedCardData: CardData[] = [];

    for (const row of data) {
      const cardId = parseInt(row["Card ID"]);

      const personalInputValues: { [key: string]: string } = {};
      const companyInputValues: { [key: string]: string } = {};

      for (const key in row) {
        if (
          key.startsWith(`${contactInfoOptions.find((op) => op.id)?.label}`)
        ) {
          personalInputValues[key] = row[key];
        } else if (
          key.startsWith(`${companyInfoOptions.find((op) => op.id)?.label}`)
        ) {
          companyInputValues[key] = row[key];
        }
      }

      processedCardData.push({
        id: cardId,
        personalInputValues,
        companyInputValues,
      });
    }
    return processedCardData;
  };

  const handleCSVUpload = (data: any, fileInfo: any) => {
    setImportedFileName(fileInfo.name);
    const processedCardData = processCSVData(data);

    handleImportedData(processedCardData);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <>
      <label htmlFor="csvFile" style={{ display: "block" }}>
        <button onClick={handleButtonClick}>
          + Upload CSV file Maximum file size 8MB (.csv only)
        </button>
      </label>
      <CSVReader
        onFileLoaded={handleCSVUpload}
        parserOptions={{ header: true, skipEmptyLines: true }}
        label={importedFileName}
        accept=".csv"
        inputStyle={{ display: "none" }}
        ref={fileInputRef}
      />
    </>
  );
};

export default Import;
