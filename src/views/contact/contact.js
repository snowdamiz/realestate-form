import React from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { ContactWrap } from './contactStyles';
import { Content, Input } from '../../globalStyles';

function Contact(props) {
    const NextStep = () => props.setPage(props.page + 1);
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
                <Input
                    placeholder="Name"
                    onChange={setName} />
                <Input
                    placeholder="Phone"
                    onChange={setPhone} />
                <Input
                    placeholder="Email"
                    onChange={setEmail} />
                <button className="nextStep" onClick={NextStep}>NEXT</button>
                <ProgressBar page={props.page} />
                <button className="prevStep" onClick={PrevStep}>Go Back</button>
            </Content>
        </ContactWrap>
    )
}

export default Contact;