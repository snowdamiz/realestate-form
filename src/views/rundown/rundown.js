import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import EditBtn from '../../assets/edit.svg';
import { RundownWrap } from './rundownStyles';
import { Content, Input } from '../../globalStyles';

function Rundown(props) {
    // const [type, setType] = useState("");
    // const [condition, setCondition] = useState("");
    // const [timeline, setTimeline] = useState("");

    // useEffect(() => {
    //     const propTypes = props.type;
    //     const propCondition = props.condition;
    //     const propTimeline = props.timeline;
    
    //     const types = {
    //         1: "Single Family",
    //         2: "Multi Family",
    //         3: "Lot or Land",
    //         4: "Commercial"
    //     }
    
    //     const conditions = {
    //         1: "Very Good!",
    //         2: "Normal Wear",
    //         3: "Not so Good",
    //         4: "Very Bad"
    //     }
    
    //     const timelines = {
    //         1: "5 Business Days",
    //         2: "10 Business Days",
    //         3: "15 Business Days",
    //         4: "20 Business Days"
    //     }
    
    //     setType(types[propTypes]);
    //     setCondition(conditions[propCondition]);
    //     setTimeline(timelines[propTimeline]);
    // }, [])

    // const val = props.value;
    // const add = props.address;
    // const zi = props.zip;
    // const nam = props.name;
    // const pho = props.phone;
    // const ema = props.email;

    return (
        <RundownWrap>
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
                    All Done!<br/>
                </h1>
                <h2 className="tyText">
                    It looks like your property is<br />
                    exactly what we specialize in.<br />
                    One of our representatives will<br />
                    contact you about your property &<br />
                    set up an appraisal.
                </h2>

                {/* <div className="detailsBox"> 
                    <p><span>Property Type</span><br />{type}</p>
                </div>

                <div className="detailsBox">
                    <p><span>Property Condition</span><br />{condition}</p>
                </div>

                <div className="detailsBox">
                    <p><span>Property Value</span><br />{props.value}</p>
                </div>

                <div className="detailsBox">
                    <p><span>Sale Timeline</span><br />{timeline}</p>
                </div>

                <div className="detailsBox">
                    <p><span>Address</span><br />{props.address}</p>
                </div>

                <div className="detailsBox">
                    <p><span>Zip Code</span><br />{props.zip}</p>
                </div>

                <div className="detailsBox">
                    <p><span>Name</span><br />{props.name}</p>
                </div>

                <div className="detailsBox">
                    <p><span>Phone</span><br />{props.phone}</p>
                </div>

                <div className="detailsBox">
                    <p><span>Email</span><br />{props.email}</p>
                </div> */}
            </Content>
        </RundownWrap>
    )
}

export default Rundown;