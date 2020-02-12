import React from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { TimelineWrap } from './timelineStyles';
import { Content, Button } from '../../globalStyles';
import Checkmark from '../../assets/checkmark.svg';

function Timeline(props) {
    const NextStep = () => props.setPage(props.page + 1);
    const PrevStep = () => props.setPage(props.page - 1);

    const setTimeline1 = () => props.setTimeline(1);
    const setTimeline2 = () => props.setTimeline(2);
    const setTimeline3 = () => props.setTimeline(3);
    const setTimeline4 = () => props.setTimeline(4);

    return (
        <TimelineWrap>
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
                    <span>4.</span>
                    How fast do you need<br/> 
                    to sell your property<br />
                    for cash?
                </h1>
                <Button
                    className={props.timeline === 1 ? 'btn-active' : 'btn-inactive'}
                    onClick={setTimeline1}>
                    {props.timeline === 1 ? <img src={Checkmark} /> : null }
                    <div className={props.timeline === 1 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.timeline === 1 ? 'text-active' : 'text-inactive'}>5 Business Days</h3>
                </Button>

                <Button
                    className={props.timeline === 2 ? 'btn-active' : 'btn-inactive'}
                    onClick={setTimeline2}>
                    {props.timeline === 2 ? <img src={Checkmark} /> : null }
                    <div className={props.timeline === 2 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.timeline === 2 ? 'text-active' : 'text-inactive'}>10 Business Days</h3>
                </Button>
                <Button
                    className={props.timeline === 3 ? 'btn-active' : 'btn-inactive'}
                    onClick={setTimeline3}>
                    {props.timeline === 3 ? <img src={Checkmark} /> : null }
                    <div className={props.timeline === 3 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.timeline === 3 ? 'text-active' : 'text-inactive'}>15 Business Days</h3>
                </Button>
                <Button 
                    className={props.timeline === 4 ? 'btn-active' : 'btn-inactive'}
                    onClick={setTimeline4}>
                    {props.timeline === 4 ? <img src={Checkmark} /> : null }
                    <div className={props.timeline === 4 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.timeline === 4 ? 'text-active' : 'text-inactive'}>20 Business Days</h3>
                </Button>
                <button className="nextStep" onClick={NextStep}>NEXT</button>
                <ProgressBar page={props.page} />
                <button className="prevStep" onClick={PrevStep}>Go Back</button>
            </Content>
        </TimelineWrap>
    )
}

export default Timeline;