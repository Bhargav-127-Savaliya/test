import React, { useState } from "react";
import "./App.css";
import Card from "./card/card";
import PrintContact from "./details-print/details-print";
import Footer from "./footer/footer";
import { CardData, Data } from "./interfaces/interfaces";
import FileUpload from "./upload-csv/upload-csv";

const App: React.FC = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<Data>({
    personalSelectedCheckbox: [],
    companySelectedCheckbox: [],
  });

  const [show, setShow] = useState<boolean>(false);
  const [step, setStep] = useState(1);
  const initialFormCount = 1;

  const [cardData, setCardData] = useState<CardData[]>(
    Array.from({ length: initialFormCount }, (_, index) => ({
      id: index + 1,
      personalInputValues: {},
      companyInputValues: {},
    }))
  );

  const [applyAll, setApplyAll] = useState(false);

  const handlePersonalCheckboxChanges = (id: string) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      personalSelectedCheckbox: prev.personalSelectedCheckbox.includes(id)
        ? prev.personalSelectedCheckbox.filter((item) => item !== id)
        : [...prev.personalSelectedCheckbox, id],
    }));
  };

  const handleCompanyCheckboxChanges = (id: string) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      companySelectedCheckbox: prev.companySelectedCheckbox.includes(id)
        ? prev.companySelectedCheckbox.filter((item) => item !== id)
        : [...prev.companySelectedCheckbox, id],
    }));
  };

  const handlePersonalInputChange = (
    cardId: number,
    id: string,
    value: string
  ) => {
    setCardData((prevCardData) => {
      const updatedCardData = prevCardData.map((card, index) => {
        if (index === cardId) {
          return {
            ...card,
            personalInputValues: { ...card.personalInputValues, [id]: value },
          };
        }
        return card;
      });
      return updatedCardData;
    });
  };

  const handleCompanyInputChange = (
    cardId: number,
    id: string,
    value: string
  ) => {
    setCardData((prevCardData) => {
      const updatedCardData = prevCardData.map((card, index) => {
        if (index === cardId) {
          return {
            ...card,
            companyInputValues: { ...card.companyInputValues, [id]: value },
          };
        }
        return card;
      });
      return updatedCardData;
    });
  };

  const handleAddForm = () => {
    const prevCard = cardData[cardData.length - 1];
    if (prevCard) {
      const newCardId = cardData.length + 1;
      setCardData((prevCardData) => [
        ...prevCardData,
        {
          id: newCardId,
          personalInputValues: {},
          companyInputValues: {},
          applyCompanyToAll: false,
        },
      ]);
    }
  };

  const handleRemoveForm = () => {
    if (cardData.length > 1) {
      setCardData((prevCardData) =>
        prevCardData.slice(0, prevCardData.length - 1)
      );
    }
  };

  const handleApplyAll = () => {
    setApplyAll(!applyAll);

    const firstCardData = cardData[0];

    const updatedCardData = cardData.map((card, cardId) => {
      if (cardId !== 0) {
        return card;
      }

      return {
        ...card,
        companyInputValues: { ...firstCardData.companyInputValues },
      };
    });

    setCardData(updatedCardData);
  };

  const handleContinue = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleImportClick = () => {
    setCardData(cardData);
  };

  return (
    <div>
      {step === 1 ? (
        <PrintContact
          value={selectedCheckboxes}
          handlePersonalCheckboxChanges={handlePersonalCheckboxChanges}
          handleCompanyCheckboxChanges={handleCompanyCheckboxChanges}
        />
      ) : (
        <>
          <FileUpload
            handleClose={handleClose}
            show={show}
            cardData={cardData}
            data={selectedCheckboxes}
            setData={setCardData}
            handleImportClick={handleImportClick}
            setShow={setShow}
          />
          <Card
            value={cardData}
            selectValue={selectedCheckboxes}
            applyAll={applyAll}
            handlePersonalInputChange={handlePersonalInputChange}
            handleCompanyInputChange={handleCompanyInputChange}
            handleApplyAll={handleApplyAll}
            handleShow={handleShow}
          />
        </>
      )}
      <Footer
        onAdd={handleAddForm}
        onRemove={handleRemoveForm}
        count={cardData}
        handleContinue={handleContinue}
        handleBack={handleBack}
      />
    </div>
  );
};

export default App;
