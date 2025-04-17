import logo from './logo.svg';
import searchIcon from "./search.svg"
import contactSupportIcon from "./contact_support.svg"
import personIcon from "./person.svg"
import tuneIcon from "./tune.svg"
import './App.css';
import React from "react"
import Select from "react-select";

const patientOptions = [
  {value:'patient_a', label:'Patient A'},
  {value:'patient_b', label:'Patient B'},
  {value:'patient_c', label:'Patient C'},
];

const questionOptions = [
  {value:'age', label:'What is the patient\'s age?'},
  {value:'allergy', label:'Does the patient has any allergy?'},
  {value:'prescription', label:'Does the patient has any existing prescription?'},
];


function App() {
  return (
    <div style={{width: 1920, height: 1500, left: 0, top: 0, position: 'absolute',background: '#F0FFFF'}}>
    <div style={{width: 1500, height: 1500, left: 75, top: 74, position: 'absolute'}}>
<div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 1287, height: 712, left: 0, top: 177, position: 'absolute'}}>
        <div style={{left: 0, top: 0, position: 'absolute', outline: '1px rgba(0, 0, 0, 0) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
            <div style={{width: 509.79, height: 62, paddingLeft: 14, paddingRight: 14, paddingTop: 10, paddingBottom: 10, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 35, outline: '1px rgba(0, 0, 0, 0) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                    <div style={{width: 40.72, height: 40.72, padding: 5, background: 'rgba(217, 217, 217, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 30.54, height: 30.54}}>
                          <img src = {searchIcon}/>
                        </div>
                    </div>
                    <div style={{width: 306.71, height: 31, color: '#828282', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Search Patient</div>
                </div>
            </div>
            <div style={{width: 46.82, height: 46.82, padding: 6, background: 'rgba(217, 217, 217, 0)', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{width: 35.12, height: 35.12}}>
                  <img src = {tuneIcon}/>
                </div>
            </div>
        </div>
        <div style={{width: 567, height: 62, paddingLeft: 16, paddingRight: 16, paddingTop: 9, paddingBottom: 9, left: 719.62, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 35, outline: '1px rgba(0, 0, 0, 0) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 18, display: 'flex'}}>
                <div style={{width: 42, height: 42, paddingLeft: 5, paddingRight: 5, paddingTop: 4, paddingBottom: 4, background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{width: 29.75, height: 35}}>
                      <img src = {contactSupportIcon}/>
                    </div>
                </div>
                <div style={{width: 296, height: 31, color: '#828282', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Ask a Question</div>
            </div>
        </div>
        <div style={{width: 573, paddingLeft: 34, paddingRight: 34, paddingTop: 45, paddingBottom: 45, left: 0, top: 106, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 35, outline: '1px rgba(0, 0, 0, 0) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 43, display: 'inline-flex'}}>
                <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 23, paddingBottom: 23, borderRadius: 20, outline: '1px rgba(0, 0, 0, 0) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{width: 99, height: 99, padding: 17, background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{width: 66, height: 66}} >
                          <img src = {personIcon}/>
                        </div>
                    </div>
                </div>
                <div style={{width: 296, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 36, display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', height: 31, color: '#828282', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>First Last</div>
                    <div style={{width: 276, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', height: 31, color: '#828282', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Gender</div>
                        <div style={{alignSelf: 'stretch', height: 31, color: '#828282', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>DOB</div>
                        <div style={{alignSelf: 'stretch', height: 31, color: '#828282', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>address</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{width: 567, height: 571, paddingLeft: 58, paddingRight: 58, paddingTop: 41, paddingBottom: 41, left: 720, top: 106, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 35, outline: '1px rgba(0, 0, 0, 0) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>The patient is allergic to aspirins.</div>
        </div>
    </div>
    <div style={{width: 397, left: 890, top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>

        <div style={{width: 200, height: 200}}>
            <img src = {logo}/>
          </div>
 
        <div style={{width: 268, height: 67, textAlign: 'right', color: '#1D98DF', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>ClinicalBot</div>
    </div>
    <div style={{width: 500, height: 67, left: 0, top: 24, position: 'absolute', color: '#1D98DF', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Hello, Doctor</div>
</div>
    </div>
    </div>
  );
}

// function SearchBar(){
//   return (<select></select>);
// }

export default App;
