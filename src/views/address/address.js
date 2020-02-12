import React from 'react';
import Header from '../../components/header/header';
import { AddressWrap } from './addressStyles';
import { Content, Input } from '../../globalStyles';

function Address(props) {
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
                    <span>5.</span>
                    Great, you're almost done!<br/> 
                    what is the address or<br />
                    your property?
                </h1>
                <Input type="text" placeholder="Address" />
                <Input type="text" placeholder="Zip Code" />
                <button>NEXT</button>
            </Content>
        </AddressWrap>
    )
}

export default Address;