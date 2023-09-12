import React from "react";
import { CardData, CheckboxData, Data } from "../interfaces/interfaces";
import { CSVLink } from "react-csv";
import { companyInfoOptions, contactInfoOptions } from "../info-options/options";

const Export: React.FC<{ data: Data; cardData: CardData[] }> = ({
  data,
  cardData,
}) => {
  const generateHeader = (
    selectedCheckboxes: string[],
    labelOptions: CheckboxData[]
  ) => {
    return selectedCheckboxes.map((checkboxId) => {
      const option = labelOptions.find((option) => option.id === checkboxId);
      return option ? `${option.label}` : "";
    });
  };

  const convertToCSV = (cardData: CardData[]) => {
    const csvRows = [];

    for (const card of cardData) {
      const rowData = [
        card.id,
        ...Object.values(card.personalInputValues),
        ...Object.values(card.companyInputValues),
      ];
      csvRows.push(rowData.join(","));
    }

    return csvRows.join("\n");
  };

  const csvData = convertToCSV(cardData);

  const personalHeader = generateHeader(data.personalSelectedCheckbox, contactInfoOptions);
  const companyHeader = generateHeader(data.companySelectedCheckbox, companyInfoOptions);

  const csvHeaders = [
    "Card ID",
    ...personalHeader,
    ...companyHeader,
  ];

  return (
    <>
      <CSVLink data={csvData} headers={csvHeaders} filename={"card_data.csv"}>
        Export a CSV file
      </CSVLink>
    </>
  );
};

export default Export;
