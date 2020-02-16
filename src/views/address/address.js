import React, { useState } from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { AddressWrap } from './addressStyles';
import { Content, Input } from '../../globalStyles';

function Address(props) {
    const [addressError, setAddressError] = useState(null);

    const NextStep = () => {
        const regexAddress = /^[a-zA-Z0-9 ]*$/;
        const regexNumber = /^\d+$/;

        const address = props.address;
        const zip = props.zip; 

        if (
            address.length < 6 ||
            !regexAddress.test(address) ||
            zip.length != 5 ||
            !regexNumber.test(zip)
            ) {
            setAddressError("Please Enter a Valid Address and Zip Code");
        } else {
            setAddressError(null);
            props.setPage(6);
        }
    };

    const PrevStep = () => props.setPage(props.page - 1);
    
    const setAddress = (e) => props.setAddress(e.target.value)
    const setZip = (e) => props.setZip(e.target.value);

    return (
        <AddressWrap>
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
                    Great, you're almost done!<br/> 
                    what is the address of<br />
                    your property?
                </h1>
                {addressError ? <div className="error">{addressError}</div>: null }
                <Input
                    value={props.address}
                    placeholder="Address"
                    onChange={setAddress}/>
                <Input
                    value={props.zip}
                    placeholder="Zip Code"
                    onChange={setZip} />
                <button className="nextStep" onClick={NextStep}>NEXT</button>
                <ProgressBar page={props.page} />
                <button className="prevStep" onClick={PrevStep}>Go Back</button>
            </Content>
        </AddressWrap>
    )
}

export default Address;