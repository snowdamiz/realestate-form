import React from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { ValueWrap } from './valueStyles';
import { Content } from '../../globalStyles';

function Value(props) {
    const NextStep = () => {
        props.setPage(props.page + 1);
    }
    
    return (
        <ValueWrap>
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
                    <span>3.</span>
                    In your opinion, what<br/> 
                    is the fair value of<br />
                    the property?
                </h1>
                <button onClick={NextStep}>NEXT</button>
                <ProgressBar page={props.page} />
            </Content>
        </ValueWrap>
    )
}

export default Value;