import React from "react";
import { Info } from "../interfaces/details-interface";
import "./details-print.css";
import { companyInfoOptions, contactInfoOptions } from "../info-options/options";

const PrintContact: React.FC<Info> = ({
  handlePersonalCheckboxChanges,
  handleCompanyCheckboxChanges,
  value,
}) => {
  return (
    <div className="details">
      <h1>Details to be printed</h1>

      <h3>Printed Contact Info</h3>
      <div>
        <h5>
          Select what contact details you want to be printed on each of your
          cards
        </h5>
        <ul>
          {contactInfoOptions.map((option) => (
            <li key={option.id}>
              <input
                type="checkbox"
                id={`personal_${option.id}`}
                value={option.label}
                checked={value.personalSelectedCheckbox.includes(option.id)}
                onChange={() => handlePersonalCheckboxChanges(option.id)}
              />
              <label htmlFor={`personal_${option}Checkbox`}>{option.label}</label>
            </li>
          ))}
        </ul>
        <ul>
          {companyInfoOptions.map((option) => (
            <li key={option.id}>
              <input
                type="checkbox"
                id={`company_${option.id}`}
                value={option.label}
                checked={value.companySelectedCheckbox.includes(option.id)}
                onChange={() => handleCompanyCheckboxChanges(option.id)}
              />
              <label htmlFor={`company_${option}Checkbox`}>{option.label}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrintContact;
