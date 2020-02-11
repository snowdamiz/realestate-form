import React from 'react';
import Header from '../../components/header/header';
import { ConditionWrap } from './conditionStyles';
import { Content } from '../../globalStyles';

function Condition(props) {
    return (
        <ConditionWrap>
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
                    <span>2.</span>
                    What is the condition<br/> 
                    of the property?
                </h1>
            </Content>
        </ConditionWrap>
    )
}

export default Condition;