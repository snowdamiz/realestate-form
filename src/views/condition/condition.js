import React from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { ConditionWrap } from './conditionStyles';
import { Content, Button } from '../../globalStyles';
import Checkmark from '../../assets/checkmark.svg';

function Condition(props) {
    const NextStep = () => props.setPage(props.page + 1);
    const PrevStep = () => props.setPage(props.page - 1);

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
                <Button className={props.type === 1 ? 'btn-active' : 'btn-inactive'}>
                    {props.type === 1 ? <img src={Checkmark} /> : null }
                    <div className={props.type === 1 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.type === 1 ? 'text-active' : 'text-inactive'}>Very Good!</h3>
                </Button>

                <Button className={props.type === 2 ? 'btn-active' : 'btn-inactive'}>
                    {props.type === 2 ? <img src={Checkmark} /> : null }
                    <div className={props.type === 2 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.type === 2 ? 'text-active' : 'text-inactive'}>Normal Wear</h3>
                </Button>
                <Button className={props.type === 3 ? 'btn-active' : 'btn-inactive'}>
                    {props.type === 3 ? <img src={Checkmark} /> : null }
                    <div className={props.type === 3 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.type === 3 ? 'text-active' : 'text-inactive'}>Not So Great</h3>
                </Button>
                <Button className={props.type === 4 ? 'btn-active' : 'btn-inactive'}>
                    {props.type === 4 ? <img src={Checkmark} /> : null }
                    <div className={props.type === 4 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.type === 4 ? 'text-active' : 'text-inactive'}>Very Bad</h3>
                </Button>
                <button className="nextStep" onClick={NextStep}>NEXT</button>
                <ProgressBar page={props.page} />
                <button className="prevStep" onClick={PrevStep}>Go Back</button>
            </Content>
        </ConditionWrap>
    )
}

export default Condition;