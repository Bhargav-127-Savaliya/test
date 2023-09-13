const handleCompanyInputChangewww = (inputId, indexno, value) => {
  let mergedData = [];
  if (indexno === 0) {
    const companyItem = checkboxes.company.find((cb) => cb.id === inputId);
    const personalItem = checkboxes.personal.find((cb) => cb.id === inputId);
    const companyDataObj = companyItem && { [companyItem.name]: value };
    const personalDataObj = personalItem && { [personalItem.name]: value };
    mergedData.push(companyDataObj, personalDataObj);
  } else {
    const companyItem1 = checkboxes.company.find((cb) => cb.id === inputId);
    const personalItem1 = checkboxes.personal.find((cb) => cb.id === inputId);
    const companyData2Obj = companyItem1 && { [companyItem1.name]: value };
    const personalData2Obj = personalItem1 && { [personalItem1.name]: value };
    mergedData.push(companyData2Obj, personalData2Obj);
  }
  mergedData = mergedData.filter((dataObj) => dataObj !== undefined);
  const mergedObject = Object.assign({}, ...mergedData);
  setMerge(mergedObject);
  console.log(indexno);
};


///////////////////////////[ORIGINAL]///////////////////////////////
// Company Input onchange handler
const handleCompanyInputChange = (inputId, indexno, value) => {
  if (indexno === 0) {
    const companyItem = checkboxes.company.find((cb) => cb.id === inputId);
    const personalItem = checkboxes.personal.find((cb) => cb.id === inputId);
    setCompanyData((prevData) => ({
      ...prevData,
      ...(companyItem && { [companyItem.name]: value }),
      ...(personalItem && { [personalItem.name]: value }),
    }));
  } else {
    const companyItem1 = checkboxes.company.find((cb) => cb.id === inputId );
    const personalItem1 = checkboxes.personal.find((cb) => cb.id === inputId )
    setCompanyData2((prevData) => ({
      ...prevData, 
      ...(companyItem1 && { [companyItem1.name]: value }), 
      ...(personalItem1 && { [personalItem1.name]: value })
    }))
  }
  setMerge(
    {...companyData,...companyData2}
  )
console.log(indexno);
};


////////////////////////////////////////////////////////////////////////////////////////
const FormDetail = (props) => {
  // ... Other code ...
  // Create an array to store form data for each card
  const [formDataArray, setFormDataArray] = useState([]);
  // Company Input onchange handler
  const handleCompanyInputChange = (inputId, indexno, value) => {
    // Create a copy of the formDataArray
    const updatedFormDataArray = [...formDataArray];
    // Check if the form data for this card already exists in the array
    if (!updatedFormDataArray[indexno]) {
      // If it doesn't exist, initialize it as an empty object
      updatedFormDataArray[indexno] = {};
    }
    // Find the companyItem and personalItem
    const companyItem = checkboxes.company.find((cb) => cb.id === inputId);
    const personalItem = checkboxes.personal.find((cb) => cb.id === inputId);
    // Update the form data for this card
    updatedFormDataArray[indexno] = {
      ...updatedFormDataArray[indexno],
      ...(companyItem && { [companyItem.name]: value }),
      ...(personalItem && { [personalItem.name]: value }),
    };
    // Update the formDataArray state
    setFormDataArray(updatedFormDataArray);
  };
  // ... Other code ...
  // Export Data in CSV
  const csvLink = {
    filename: "file.csv",
    data: formDataArray, // Use the array of form data
  };
  // ... Other code ...
};
