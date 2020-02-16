import React, { useState } from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { ConditionWrap } from './conditionStyles';
import { Content, Button } from '../../globalStyles';
import Checkmark from '../../assets/checkmark.svg';

function Condition(props) {
    const [conditionError, setConditionError] = useState(null);

    const PrevStep = () => props.setPage(props.page - 1);

    const setCondition1 = () => {
        props.setCondition(1);
        props.setPage(props.page + 1);
    };
    
    const setCondition2 = () => {
        props.setCondition(2);
        props.setPage(props.page + 1);
    };
    
    const setCondition3 = () => {
        props.setCondition(3);
        props.setPage(props.page + 1);
    };
    
    const setCondition4 = () => {
        props.setCondition(4);
        props.setPage(props.page + 1);
    };
    
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
                    What is the condition<br/> 
                    of the property?
                </h1>
                {conditionError ? <div className="error">{conditionError}</div> : null}
                <Button 
                    className={props.condition === 1 ? 'btn-active' : 'btn-inactive'}
                    onClick={setCondition1}>
                    {/* {props.condition === 1 ? <img src={Checkmark} /> : null }
                    <div className={props.condition === 1 ? 'radio-active' : 'radio-inactive'}></div> */}
                    <h3 className={props.condition === 1 ? 'text-active' : 'text-inactive'}>Very Good!</h3>
                </Button>

                <Button 
                    className={props.condition === 2 ? 'btn-active' : 'btn-inactive'}
                    onClick={setCondition2}>
                    {/* {props.condition === 2 ? <img src={Checkmark} /> : null }
                    <div className={props.condition === 2 ? 'radio-active' : 'radio-inactive'}></div> */}
                    <h3 className={props.condition === 2 ? 'text-active' : 'text-inactive'}>Normal Wear</h3>
                </Button>
                <Button 
                    className={props.condition === 3 ? 'btn-active' : 'btn-inactive'}
                    onClick={setCondition3}>
                    {/* {props.condition === 3 ? <img src={Checkmark} /> : null }
                    <div className={props.condition === 3 ? 'radio-active' : 'radio-inactive'}></div> */}
                    <h3 className={props.condition === 3 ? 'text-active' : 'text-inactive'}>Not So Great</h3>
                </Button>
                <Button
                    className={props.condition === 4 ? 'btn-active' : 'btn-inactive'}
                    onClick={setCondition4}>
                    {/* {props.condition === 4 ? <img src={Checkmark} /> : null }
                    <div className={props.condition === 4 ? 'radio-active' : 'radio-inactive'}></div> */}
                    <h3 className={props.condition === 4 ? 'text-active' : 'text-inactive'}>Very Bad</h3>
                </Button>
                {/* <button className="nextStep" onClick={NextStep}>NEXT</button> */}
                <ProgressBar page={props.page} />
                <button className="prevStep" onClick={PrevStep}>Go Back</button>
            </Content>
        </ConditionWrap>
    )
}

export default Condition;