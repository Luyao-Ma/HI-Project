import React, { useState } from "react";
import Select from "react-select";
import logo from './logo.svg';
import searchIcon from "./search.svg";
import contactSupportIcon from "./contact_support.svg";
import personIcon from "./person.svg";
import tuneIcon from "./tune.svg";
import './App.css';

const patientOptions = [
  { value: 'patient_a', label: 'Patient A' },
  { value: 'patient_b', label: 'Patient B' },
  { value: 'patient_c', label: 'Patient C' },
];

const questionOptions = [
  { value: 'age', label: "What is the patient's age?" },
  { value: 'allergy', label: "Does the patient have any allergy?" },
  { value: 'prescription', label: "Does the patient have any existing prescription?" },
];

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [patientData, setPatientData] = useState(null);
  const [queryResult, setQueryResult] = useState("");

  const fetchPatientData = async (patientId) => {
    try {
      const response = await fetch("http://localhost:5000/getPatientNotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientId })
      });
      const data = await response.json();
      setPatientData(data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  const sendQuery = async () => {
    if (!selectedPatient || !selectedQuestion) {
      alert("Please select both a patient and a question.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/getPatientNotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId: selectedPatient.value,
          question: selectedQuestion.value
        })
      });
      const result = await response.json();
      setQueryResult(result.result);
    } catch (error) {
      console.error("Error sending query:", error);
    }
  };

  return (
    <div style={{ width: 1287, height: 880, left: 75, top: 74, position: "absolute" }}>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <div style={{ left: 0, top: 0, position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: 16, display: "inline-flex" }}>
              <div style={{ width: 509.79, height: 62, paddingLeft: 14, paddingRight: 14, paddingTop: 10, paddingBottom: 10, background: "rgba(217, 217, 217, 0)", borderRadius: 35, outline: "1px black solid", outlineOffset: "-1px", justifyContent: "flex-start", alignItems: "center", gap: 10, display: "flex" }}>
                  <div style={{ justifyContent: "flex-start", alignItems: "center", gap: 16, display: "flex" }}>
                      <div style={{ width: 40.72, height: 40.72, padding: 5, background: "rgba(217, 217, 217, 0)", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 10, display: "inline-flex" }}>
                          <div style={{ width: 30.54, height: 30.54 }}>
                            <img src={searchIcon} alt="search" />
                          </div>
                      </div>
                      <div style={{ width: 306.71, height: 31 }}>
                        <Select 
                          options={patientOptions}
                          placeholder="Select Patient"
                          onChange={(option) => {
                            setSelectedPatient(option);
                            fetchPatientData(option.value);
                          }}
                        />
                      </div>
                      
                  </div>
              </div>
              <div style={{ width: 46.82, height: 46.82, padding: 6, background: "rgba(217, 217, 217, 0)", justifyContent: "center", alignItems: "center", gap: 10, display: "flex" }}>
                  <div style={{ width: 35.12, height: 35.12 }}>
                    <img src={tuneIcon} alt="tune" />
                  </div>
              </div>
          </div>
          <div style={{ width: 567, height: 62, paddingLeft: 16, paddingRight: 16, paddingTop: 9, paddingBottom: 9, left: 719.62, top: 0, position: "absolute", background: "rgba(217, 217, 217, 0)", borderRadius: 35, outline: "1px black solid", outlineOffset: "-1px", justifyContent: "flex-start", alignItems: "center", gap: 10, display: "inline-flex" }}>
              <div style={{ justifyContent: "flex-start", alignItems: "center", gap: 18, display: "flex" }}>
                  <div style={{ width: 42, height: 42, paddingLeft: 5, paddingRight: 5, paddingTop: 4, paddingBottom: 4, background: "white", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 10, display: "inline-flex" }}>
                      <div style={{ width: 29.75, height: 35 }}>
                        <img src={contactSupportIcon} alt="support" />
                      </div>
                  </div>
                  <div style={{ width: 400, height: 31 }}>
                    <Select 
                      options={questionOptions}
                      placeholder="Select Question"
                      onChange={(option) => setSelectedQuestion(option)}
                    />
                  </div>
              </div>
          </div>
          <div style={{ width: 573, height: 260, paddingLeft: 34, paddingRight: 34, paddingTop: 45, paddingBottom: 45, left: 0, top: 106, position: "absolute", background: "rgba(217, 217, 217, 0)", borderRadius: 35, outline: "1px black solid", outlineOffset: "-1px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 10, display: "inline-flex" }}>
              <div style={{ justifyContent: "flex-start", alignItems: "flex-start", gap: 43, display: "inline-flex" }}>
                  <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 23, paddingBottom: 23, borderRadius: 20, outline: "1px black solid", outlineOffset: "-1px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 10, display: "inline-flex" }}>
                      <div style={{ width: 99, height: 99, padding: 17, background: "white", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 10, display: "flex" }}>
                          <div style={{ width: 66, height: 66 }}>
                            <img src={personIcon} alt="person" />
                          </div>
                      </div>
                  </div>
                  <div style={{ width: 296, flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 36, display: "inline-flex" }}>
                      <div style={{ alignSelf: "stretch", height: 31, color: "#828282", fontSize: 36, fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word" }}>
                        {patientData ? `${patientData.firstName || "First"} ${patientData.lastName || "Last"}` : "First Last"}
                      </div>
                      <div style={{ width: 276, flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 5, display: "flex" }}>
                          <div style={{ alignSelf: "stretch", height: 31, color: "#828282", fontSize: 24, fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word" }}>
                            {patientData ? patientData.gender : "Gender"}
                          </div>
                          <div style={{ alignSelf: "stretch", height: 31, color: "#828282", fontSize: 24, fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word" }}>
                            {patientData ? patientData.DOB : "DOB"}
                          </div>
                          <div style={{ alignSelf: "stretch", height: 31, color: "#828282", fontSize: 24, fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word" }}>
                            {patientData ? patientData.address : "Address"}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div style={{ width: 567, height: 571, paddingLeft: 58, paddingRight: 58, paddingTop: 41, paddingBottom: 41, left: 720, top: 106, position: "absolute", background: "rgba(217, 217, 217, 0)", borderRadius: 35, outline: "1px black solid", outlineOffset: "-1px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 10, display: "inline-flex" }}>
              <div style={{ color: "black", fontSize: 24, fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word" }}>
                {queryResult ? `Response: ${queryResult}` : "The patient is allergic to aspirins."}
              </div>
              <button onClick={sendQuery} style={{ marginTop: 20, padding: "10px 20px", fontSize: 16 }}>
                Send Query
              </button>
          </div>
      </div>
    </div>
  );
}

export default App;
