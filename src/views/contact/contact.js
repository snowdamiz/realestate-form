import React from 'react';
import Header from '../../components/header/header';
import { ContactWrap } from './contactStyles';
import { Content, Input } from '../../globalStyles';

function Contact(props) {
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
                <Input type="text" placeholder="Name" />
                <Input type="text" placeholder="Phone" />
                <Input type="text" placeholder="Email" />
                <button>NEXT</button>
            </Content>
        </ContactWrap>
    )
}

export default Contact;