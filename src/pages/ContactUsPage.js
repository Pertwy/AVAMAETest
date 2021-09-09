import React, {useState} from 'react'
import Input from '../components/Input'
import "../css/grids.css"
import "../css/contact-us.css"
import Checkbox from '../components/Checkbox'
import TitleSubTitle from '../components/TitleSubTitle'
import axios from 'axios';
import SubmitButton from '../components/SubmitButton'
import CompanyButton from '../components/CompanyButton'

export default function ContactUsPage() {

    const [phoneToggle, setPhoneToggle] = useState(false)
    const [toggleForm, setToggleForm] = useState(false)
    const [addressCheckbox, setAddressCheckbox] = useState(false)
    const [phoneNumbersIndex, setPhoneNumbersIndex] = useState([1])
    const [phoneNumbers, setPhoneNumbers] = useState({phone1:""})
    const [errorList, setErrorList] = useState([])

    const [formDetails, setFormDetails] = useState({
        FullName:"", EmailAddress:"", phone1:"", phone2:"", Message:"", AddressLine1:"", 
        AddressLine2:"", CityTown:"", StateCounty:"", Postcode:"", Country:"" })
    
    const errors = {
        Required: "Need to supply a value",
        Invalid_Email_Address: "Email address is invalid",
        Invalid_Phone_Number: "Phone number is invalid. Cannot exceed 20 characters",
        Max_Length_Exceeded: "The message provided exceeds the maximum length allowed",
        Invalid_Postcode: "Not a valid UK postcode"
    }
    


    const handleSubmit = (e) => {
        e.preventDefault();
        var numbers = []
        for (const [key, value] of Object.entries(phoneNumbers)) {
            numbers.push(value) 
        }

        var submitDetails = {
            "FullName": formDetails.FullName,
            "EmailAddress": formDetails.EmailAddress,
            "Message": formDetails.Message,
            "bIncludeAddressDetails": addressCheckbox,
            "AddressDetails": {
              "AddressLine1": formDetails.AddressLine1,
              "AddressLine2": formDetails.AddressLine2,
              "CityTown": formDetails.CityTown,
              "StateCounty": formDetails.StateCounty,
              "Postcode": formDetails.Postcode,
              "Country": formDetails.Country
            }
          }
          if(numbers[0].length > 0){submitDetails.PhoneNumbers = numbers}
          console.log(submitDetails)

          axios.post('https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit', submitDetails)
            .then(res => { submitResponse(res.data)})
            .catch(function (error) {
                if (error.response) {
                    submitResponse(error.response.data);}})
    }


    function submitResponse({Status, Errors}){
        setErrorList([])
        if (Status==="1"){
            setToggleForm(true)
        }
        else{
            Errors.map(error=>{
                setErrorList(errorList => [...errorList, errors[error.MessageCode]])
            })
        }
    }

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setFormDetails({...formDetails,[name]:value})
        console.log(name, value)
    }
    const handlePhoneChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setPhoneNumbers({...phoneNumbers,[name]:value})
        console.log(name, value)
    }

    function handleAddPhoneNumber(){
        setPhoneNumbersIndex(phoneNumbersIndex => [...phoneNumbersIndex, phoneNumbersIndex.length+1])
    }

    

    return (
        <div className="grid-half full-width site-wide-margin ">
            <div className="contact-us-form contact-us site-wide-margin">
                <TitleSubTitle 
                title ="Contact us"
                subtitle = "Populo facillsi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusat te nec, summo accumsan at vix."/>
                
                {!toggleForm &&(
                <form>

                    <div className="grid-half">
                        <Input label="Full name:" name="FullName" value={formDetails.FullName} onChange={handleChange}/>
                        <Input label="Email Address:" name="EmailAddress" value={formDetails.EmailAddress} onChange={handleChange}/>
                    </div>

                    <div className="Phone numbers">
                        {phoneNumbersIndex.map(phonenumber => {
                            return(
                                <Input key={`${phonenumber.toString()}`} label={`Phone Number 0${phonenumber.toString()} - optional`} name={`phone${phonenumber.toString()}`} value={phoneNumbers[`phone${phonenumber.toString()}`]} onChange={handlePhoneChange}/>
                            )
                        })}
                    </div>

                    {!phoneToggle &&(
                        <CompanyButton title="Add new phone number" isDark={false} isFullWidth={true} isAlwaysFullWidth={true} clicked={()=>handleAddPhoneNumber()}/>
                    )}

                    <Input label="Message - Maximum text length is 500 characters" name="Message" value={formDetails.Message} onChange={handleChange} isTall={true}/>
                    
                    <Checkbox value={addressCheckbox} onChange={()=>setAddressCheckbox(!addressCheckbox)}/>
                    

                    {addressCheckbox && (
                    <>
                        <div className="full-width">  
                            <div className="grid-half full-width">
                                <Input label="Address line 1" name="AddressLine1" value={formDetails.AddressLine1} onChange={handleChange}/>
                                <Input label="Address line 2 - optional" name="AddressLine2" value={formDetails.AddressLine2} onChange={handleChange}/>
                            </div>
                        </div>


                        <div className="full-width">  
                            <div className="grid-one-one-one-one full-width">
                                <Input label="City/Town" name="CityTown" value={formDetails.CityTown} onChange={handleChange}/>
                                <Input label="State/County" name="StateCounty" value={formDetails.StateCounty} onChange={handleChange}/>
                                <Input label="Postcode" name="Postcode" value={formDetails.Postcode} onChange={handleChange}/>
                                <Input label="Country" name="Country" value={formDetails.Country} onChange={handleChange}/>
                            </div>
                        </div>
                    </>
                    )}


                    <ul className="error-list">
                        {errorList.map(error => {
                            return(
                                <li key={error}>{error}</li>
                            )
                        })}
                    </ul>

                    <SubmitButton submit={handleSubmit}/>     

                </form>
                )}
                {toggleForm && (
                    <div className="successful-form-submit">
                        <div className="green-tick">
                            <div className="tick-img"></div>
                        </div>
                        <h3><b>Your message has been sent</b></h3>
                        <p>We will be in contact with you within 24 hours</p>
                    </div>
                )}
            </div>

            <div className="swirl">
            </div>
        </div>
    )
}
