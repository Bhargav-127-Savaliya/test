  // All Imports 
  import React, { useContext, useState } from "react";
  import { CSVLink } from "react-csv";
  import { data } from "../Contex/ContexAPI";
  import Papa from 'papaparse';
    // main function
  const FormDetail = (props) => {
    // counter number
    const RenderingTime = props.countdatas;
    // imported data from contexAPI
    const { checkboxes, selectedCheckboxesforpersonal, selectedCheckboxesforcompany } = useContext(data);
    const [copyToAllChecked, setCopyToAllChecked] = useState(false);
    const [companyData, setCompanyData] = useState([]);
    // Company Input onchange handler
    const handleCompanyInputChange = (inputId,indexno, value) => {
      const companyItem = checkboxes.company.find((cb) => cb.id === inputId);
      const personalItem = checkboxes.personal.find((cb) => cb.id === inputId);
      setCompanyData((prevData) => ({
        ...prevData,
        ...(companyItem && { [companyItem.name]: value }),
        ...(personalItem && { [personalItem.name]: value }),
      }));
      console.log("index of " + indexno + " in 1st Card " + "input id is " + inputId);
      // console.log(checkboxes.personal.find((cb) => cb.id === inputId)?.name);
    };
    // Company Input onchange handler (TESTING)
    const handleCompanyInputChangeINDEX = (inputId,indexno, value) => {
      // console.log(inputId + " " + value);
      console.log("index of " + indexno + " in 2nd Card " + "input id is " + inputId);
      // console.log(checkboxes.personal.find((cb) => cb.id === inputId)?.name);
    };
    // CSV hendler
    const handleCSVFile = (file) => {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (result) => {
          const data = result.data[0];
          console.log("Parsed CSV Data:", data);
          setCompanyData((prevData) => ({
            ...prevData,
            ...data,
          }));
          console.log("Updated Company Data:", companyData);
        },
        error: (error) => {
          console.error(error.message);
        },
      });
    };
    // copy to all cards hendler 
    const handleCopyToAll = () => {
      setCopyToAllChecked(!copyToAllChecked);
    };
    // form submit hendler (for not reload)
    const submitHandler = (e) => {
      e.preventDefault();
    }
    // array for import/export data in CSV
    const dummy = []
    dummy.push(companyData)
    // Export Data in CSV
    const csvLink = {
      filename: "file.csv",
      data: dummy
    }
    // console.log(dummy[0])
    // Main Return
    return (
      <React.Fragment>
        {/* lable : (CARD DETAILS)*/}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Card Deatils</h2>
        </div>
        {/* CSV IMPORT / EXPORT BUTTONS */}
        <div className="export bg-purple-500 w-12 rounded">
          <CSVLink {...csvLink}>export</CSVLink>
        </div>
        <div className="file">
          <input
            type="file"
            accept=".csv"
            onChange={(e) => handleCSVFile(e.target.files[0])}
          />
        </div>
        {/* render multiple time  */}
        {[...Array(RenderingTime)].map((_, index) => (
          <div key={index}>
            {
              <div className="mt-4 flex flex-col min-h-screen">
                <div key={index}>
                  {/* main form  */}
                  <div className="border-2 border-gray-500 rounded-lg mx-2 p-2">
  
                    {/* input Start */}
                    <div className="flex">
                      <div className="con1 w-2/4 p-4 text-center">
                        <h1 className="text-4xl">Card {index + 1}</h1>
                      </div>
                      <div className="con2 w-3/4 p-4">
                        {/* personal details  */}
                        <div className="personal my-4">
                          <h1 className="text-xl font-bold mb-4">Personal Details</h1>
                          <div className="per-details grid grid-cols-2 gap-4 mr-16">
                            {/* PERSONAL Index === 0 */}
                            {index === 0 ? selectedCheckboxesforpersonal.map((checkboxId) => (
                              <div key={`${index}-${checkboxId}`} className="flex items-center mx-6">
                                <div className="w-1/2 pr-4">
                                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" htmlFor="inline-full-name">
                                    {checkboxes.personal.find((checkbox) => checkbox.id === checkboxId)?.name}
                                  </label>
                                </div>
                                <div className="w-1/2">
                                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder={checkboxes.personal.find((checkbox) => checkbox.id === checkboxId)?.name}
                                    // onChange={(e) => handlePersonalInputChange(checkboxId, e.target.value)}
                                    onChange={(e) => handleCompanyInputChange(checkboxId,index,e.target.value)}
                                    value={companyData[checkboxes.personal.find((cb) => cb.id === checkboxId)?.name] || ''}
                                  />
                                </div>
                              </div>
                            ))
                              :
                              // PERSONAL Index >= 0
                              selectedCheckboxesforpersonal.map((checkboxId) => (
                                <div key={`${index}-${checkboxId}`} className="flex items-center mx-6">
                                  <div className="w-1/2 pr-4">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" htmlFor="inline-full-name">
                                      {checkboxes.personal.find((checkbox) => checkbox.id === checkboxId)?.name}
                                    </label>
                                  </div>
                                  <div className="w-1/2">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder={checkboxes.personal.find((checkbox) => checkbox.id === checkboxId)?.name}
                                      // onChange={(e) => handlePersonalInputChange(checkboxId, e.target.value)}
                                      onChange={(e) => handleCompanyInputChangeINDEX(checkboxId,index,e.target.value)}
                                    />
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                        {/* company details  */}
                        <div className="company my-4">
                          <h1 className="text-xl font-bold mb-4">Company Details</h1>
                          <div>
                            <form action="" onSubmit={submitHandler} className="com-details grid grid-cols-2 gap-4 mr-16" >
                              {/* COMPANY Index === 0 */}
                              {
                                index === 0 ?
                                  selectedCheckboxesforcompany.map((checkboxId, index) => (
                                    <div key={`${index}-${checkboxId}`} className="flex items-center mx-6">
                                      <div className="w-1/2 pr-4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" htmlFor="inline-full-name">
                                          {checkboxes.company.find((checkbox) => checkbox.id === checkboxId)?.name}
                                        </label>
                                      </div>
                                      <div className="w-1/2">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder={checkboxes.company.find((checkbox) => checkbox.id === checkboxId)?.name}
                                          onChange={(e) => handleCompanyInputChange(checkboxId,index,e.target.value)}
                                          value={companyData[checkboxes.company.find((cb) => cb.id === checkboxId)?.name] || ''}
                                        />
                                      </div>
                                    </div>
                                  ))
                                  :
                                  // COMPANY Index >= 0
                                  selectedCheckboxesforcompany.map((checkboxId) => (
                                    <div key={`${index}-${checkboxId}`}>
                                      {copyToAllChecked ?
                                        <div>
                                          <p>{checkboxes.company.find((checkbox) => checkbox.id === checkboxId)?.name} : {companyData[checkboxes.company.find((cb) => cb.id === checkboxId)?.name]}</p>
                                        </div>
                                        :
                                        <div className="flex items-center mx-6">
                                          <div className="w-1/2 pr-4">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" htmlFor="inline-full-name">
                                              {checkboxes.company.find((checkbox) => checkbox.id === checkboxId)?.name}
                                            </label>
                                          </div>
                                          <div className="w-1/2">
                                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder={checkboxes.company.find((checkbox) => checkbox.id === checkboxId)?.name}
                                              onChange={(e) => handleCompanyInputChangeINDEX(checkboxId,index,e.target.value)}
                                            // value={copyToAllChecked ? companyData[checkboxes.company.find((cb) => cb.id === checkboxId)?.name] : ""} 
                                            />
                                          </div>
                                        </div>}
                                    </div>
                                  ))
                              }
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* inputs End */}
  
                    {/* other Start */}
                    <div className="other flex">
                      <div className="col1 w-2/4">
                      </div>
                      {RenderingTime > 1 &&
                        <div className="col2 w-3/4 flex">
                          {/* Apply in Same Company to all CheckBox */}
                          {index === 0 &&
                            <div className="md:flex md:items-center mb-6 w-full">
                              <div className="md:w-1/3"></div>
                              <label className="md:w-2/3 block text-gray-500 font-bold">
                                {/* <input className="mr-2 leading-tight" type="checkbox"  onChange={handleCopyToAll}/> */}
                                <input
                                  type="checkbox"
                                  id="copyToAllCheckbox"
                                  checked={copyToAllChecked}
                                  onChange={handleCopyToAll}
                                />
                                <span className="text-sm">
                                  Apply Company information to all cards
                                </span>
                              </label>
                            </div>}
                          {/* <div className="md:flex md:items-center w-3/4">
                          <div className="md:w-1/3"></div>
                          <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                              Sign Up
                            </button>
                          </div>
                        </div> */}
                        </div>
                      }
                    </div>
                    {/* other end */}
                  </div>
                </div>
              </div>
            }
          </div>
        ))}
      </React.Fragment>
    )
  };
  
  export default FormDetail;