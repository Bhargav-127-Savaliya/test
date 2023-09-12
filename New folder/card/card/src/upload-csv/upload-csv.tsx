import React, { useState } from "react";
import "./upload-csv.css";
import { Props } from "../interfaces/upload-csv-interface";
import Export from "../export/export-csv";
import Import from "../import/import-csv";
import { CardData } from "../interfaces/interfaces";

const FileUpload: React.FC<Props> = ({ handleClose, show, data, cardData, setData, setShow}) => {
  const [importedCardData, setImportedCardData] = useState<CardData[]>([]);

  const handleImportedData = (importedData: CardData[]) => {
    setImportedCardData(importedData);
  }

  const handleImportClick = () => {
    setData(importedCardData);
    setShow(false);
  };

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <h3>Import a CSV file to edit card details</h3>
        <p>
          Make bulk edits to cardholder profiles by importing a CSV file.
          Existing details will automatically be replaced by the details in your
          imported file. Export a CSV file
        </p>
        <span>
          <Export data={data} cardData={cardData} />
        </span>
        <div>
          <Import handleImportedData={handleImportedData} option={data} />
        </div>
        <div className="modal-buttons">
          <button className="close" onClick={handleClose}>
            Cancel
          </button>
          <button onClick={handleImportClick}>Import</button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
