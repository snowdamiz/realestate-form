import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { ContactWrap } from './contactStyles';
import { Content, Input } from '../../globalStyles';

function Contact(props) {
    const [contactError, setContactError] = useState(null);
    const [type, setType] = useState("");
    const [condition, setCondition] = useState("");
    const [timeline, setTimeline] = useState("");

    useEffect(() => {
        const propTypes = props.type;
        const propCondition = props.condition;
        const propTimeline = props.timeline;
    
        const types = {
            1: "Single Family",
            2: "Multi Family",
            3: "Lot or Land",
            4: "Commercial"
        }
    
        const conditions = {
            1: "Very Good!",
            2: "Normal Wear",
            3: "Not so Good",
            4: "Very Bad"
        }
    
        const timelines = {
            1: "5 Business Days",
            2: "10 Business Days",
            3: "15 Business Days",
            4: "20 Business Days"
        }
    
        setType(types[propTypes]);
        setCondition(conditions[propCondition]);
        setTimeline(timelines[propTimeline]);
    }, [])

    const val = props.value;
    const add = props.address;
    const zi = props.zip;
    const nam = props.name;
    const pho = props.phone;
    const ema = props.email;

    const submit = () => {
        const regexLetters = /^[a-zA-Z\s]*$/;
        const regexNumber = /^\d+$/;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const name = props.name;
        const phone = props.phone;
        const email = props.email;

        if (
            name.length < 3 ||
            !regexLetters.test(name) ||
            phone.length != 10 ||
            !regexNumber.test(phone) ||
            email.length < 6 ||
            !regexEmail.test(email)
            ) {
            setContactError("Please Enter Valid Contact Information");
        } else {
            setContactError(null);
            
            let dataSubmitted = {
                type: type,
                condition: condition,
                value: val,
                timeline: timeline,
                address: add,
                zip: zi,
                name: nam,
                phone: pho,
                email: ema
            };
    
            Axios.post("https://realestate-form-api.herokuapp.com/api/send", dataSubmitted);
            setTimeout(() => props.setPage(7), 1000);
        }
    }

    const PrevStep = () => props.setPage(props.page - 1);

    const setName = (e) => props.setName(e.target.value);
    const setPhone = (e) => props.setPhone(e.target.value);
    const setEmail = (e) => props.setEmail(e.target.value);
    
    return (
        <ContactWrap>
            <Header 
                page={props.page}
                setPage={props.setPage}
                type={props.type}
                setType={props.setType}
                condition={props.condition}
                setCondition={props.setCondition}
                value={props.value}
                setValue={props.setValue}
                timeline={props.timeline}
                setTimeline={props.setTimeline}
                address={props.address}
                setAddress={props.setAddress}
                zip={props.zip}
                setZip={props.setZip}
                name={props.name}
                setName={props.setName}
                phone={props.phone}
                setPhone={props.setPhone}
                email={props.email}
                setEmail={props.setEmail} />

            <Content>
                <h1>
                    <span>6.</span>
                    Who should we contact?
                </h1>
                {contactError ? <div className="error">{contactError}</div> : null }
                <Input
                    placeholder="Name"
                    onChange={setName} />
                <Input
                    value={props.phone}
                    placeholder="Phone"
                    onChange={setPhone} />
                <Input
                    value={props.email}
                    placeholder="Email"
                    onChange={setEmail} />
                <button className="submitBtn" onClick={submit}>SUBMIT</button>
                {/* <button className="nextStep" onClick={NextStep}>NEXT</button> */}
                <ProgressBar page={props.page} />
                <button className="prevStep" onClick={PrevStep}>Go Back</button>
            </Content>
        </ContactWrap>
    )
}

export default Contact;