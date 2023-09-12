import React from "react";
import { Props } from "../interfaces/card-interface";
import "./card.css";
import {
  companyInfoOptions,
  contactInfoOptions,
} from "../info-options/options";

const Card: React.FC<Props> = ({
  value,
  selectValue,
  applyAll,
  handlePersonalInputChange,
  handleCompanyInputChange,
  handleApplyAll,
  handleShow,
}) => {
  return (
    <div className="card">
      <h1>Card details</h1>
      <div className="card-div">
        <div className="left-content">
          <h2>Add your details</h2>
          <span>These details will be printed on your individual cards.</span>
        </div>

        <div className="right-content">
          <button onClick={handleShow}>Upload CSV +</button>
        </div>
      </div>

      {value.length > 0 &&
        value.map((card, cardId) => (
          <div key={card.id}>
            {
              <div className="card-contain">
                <h2>Card{cardId + 1}</h2>
                <form>
                  <h3>Personal Information</h3>
                  {selectValue.personalSelectedCheckbox.map((selectedId) => {
                    const option = contactInfoOptions.find(
                      (option) => option.id === selectedId
                    );
                    const valueToShow =
                      option && card.personalInputValues[selectedId]
                        ? card.personalInputValues[selectedId]
                        : "";
                    return (
                      <div key={selectedId}>
                        <label
                          htmlFor={`personal_input_${card.id}_${selectedId}`}
                        >
                          {option?.label}
                        </label>
                        <input
                          type="text"
                          id={`personal_input_${card.id}_${selectedId}`}
                          value={valueToShow}
                          onChange={(e) =>
                            handlePersonalInputChange(
                              cardId,
                              selectedId,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    );
                  })}
                  <h3>Company Information</h3>
                  {applyAll && cardId !== 0 ? (
                    <>
                      {selectValue.companySelectedCheckbox.map((selectedId) => (
                        <div key={selectedId}>
                          <b>{value[0]?.companyInputValues[selectedId]}</b>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {selectValue.companySelectedCheckbox.map((selectedId) => {
                        const option = companyInfoOptions.find(
                          (option) => option.id === selectedId
                        );
                        const valueToShow =
                          option && card.companyInputValues[selectedId]
                            ? card.companyInputValues[selectedId]
                            : "";

                        return (
                          <div key={selectedId}>
                            <label
                              htmlFor={`company_input_${card.id}_${selectedId}`}
                            >
                              {option?.label}
                            </label>
                            <input
                              type="text"
                              id={`company_input_${card.id}_${selectedId}`}
                              value={valueToShow}
                              onChange={(e) =>
                                handleCompanyInputChange(
                                  cardId,
                                  selectedId,
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        );
                      })}
                    </>
                  )}
                  {cardId === 0 && (
                    <>
                      <input
                        type="checkbox"
                        checked={applyAll}
                        onChange={handleApplyAll}
                        required
                      />
                      <label>Apply Company information to all cards</label>
                    </>
                  )}
                </form>
              </div>
            }
          </div>
        ))}
    </div>
  );
};

export default Card;
