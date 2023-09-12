import React, { useContext, useState } from "react";
import { CSVLink } from "react-csv";
import { data } from "../Contex/ContexAPI";
import Papa from 'papaparse';

const FormDetail = (props) => {
  const RenderingTime = props.countdatas;
  const { checkboxes, selectedCheckboxesforpersonal, selectedCheckboxesforcompany } = useContext(data);
  const [copyToAllChecked, setCopyToAllChecked] = useState(false);

  // Maintain an array to store data for each form
  const [formData, setFormData] = useState([...Array(RenderingTime)].map(() => ({})));

  const handleCompanyInputChange = (inputId, indexno, value) => {
    const companyItem = checkboxes.company.find((cb) => cb.id === inputId);
    const personalItem = checkboxes.personal.find((cb) => cb.id === inputId);

    // Update the specific form's data
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[indexno] = {
        ...newData[indexno],
        ...(companyItem && { [companyItem.name]: value }),
        ...(personalItem && { [personalItem.name]: value }),
      };
      return newData;
    });
  };

  const handleCSVFile = (file) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        const data = result.data[0];
        console.log("Parsed CSV Data:", data);

        // Update data for all forms with the parsed CSV data
        setFormData(() => {
          return formData.map((form, index) => {
            if (index === 0) {
              return data;
            }
            return form;
          });
        });
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  };

  // ... (Rest of your code)

  // Combine data from all forms for exporting
  const combinedFormData = formData.reduce((combined, form) => ({ ...combined, ...form }), {});

  const dummy = [];
  dummy.push(combinedFormData);

  const csvLink = {
    filename: "file.csv",
    data: dummy,
  };

  return (
    <React.Fragment>
      {/* ... (Rest of your code) */}
    </React.Fragment>
  );
};

export default FormDetail;
