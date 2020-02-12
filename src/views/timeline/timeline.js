import React from 'react';
import Header from '../../components/header/header';
import { TimelineWrap } from './timelineStyles';
import { Content, Button } from '../../globalStyles';
import Checkmark from '../../assets/checkmark.svg';

function Timeline(props) {
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
                <Button className={props.type === 1 ? 'btn-active' : 'btn-inactive'}>
                    {props.type === 1 ? <img src={Checkmark} /> : null }
                    <div className={props.type === 1 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.type === 1 ? 'text-active' : 'text-inactive'}>5 Business Days</h3>
                </Button>

                <Button className={props.type === 2 ? 'btn-active' : 'btn-inactive'}>
                    {props.type === 2 ? <img src={Checkmark} /> : null }
                    <div className={props.type === 2 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.type === 2 ? 'text-active' : 'text-inactive'}>10 Business Days</h3>
                </Button>
                <Button className={props.type === 3 ? 'btn-active' : 'btn-inactive'}>
                    {props.type === 3 ? <img src={Checkmark} /> : null }
                    <div className={props.type === 3 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.type === 3 ? 'text-active' : 'text-inactive'}>15 Business Days</h3>
                </Button>
                <Button className={props.type === 4 ? 'btn-active' : 'btn-inactive'}>
                    {props.type === 4 ? <img src={Checkmark} /> : null }
                    <div className={props.type === 4 ? 'radio-active' : 'radio-inactive'}></div>
                    <h3 className={props.type === 4 ? 'text-active' : 'text-inactive'}>20 Business Days</h3>
                </Button>
                <button>NEXT</button>
            </Content>
        </TimelineWrap>
    )
}

export default Timeline;