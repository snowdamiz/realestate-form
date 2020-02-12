import React from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import EditBtn from '../../assets/edit.svg';
import { RundownWrap } from './rundownStyles';
import { Content, Input } from '../../globalStyles';

function Rundown(props) {
    const editType = () => props.setPage(1);
    const editCondition = () => props.setPage(2);
    const editValue = () => props.setPage(3);
    const editTimeline = () => props.setPage(4);
    const editAddress = () => props.setPage(5);
    const editZip = () => props.setPage(5);
    const editName = () => props.setPage(6);
    const editPhone = () => props.setPage(6);
    const editEmail = () => props.setPage(6);


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
                    <span>6.</span>
                    Here are your Selections
                </h1>

                <div>
                    <p><span>Property Type</span><br />{props.type}</p>
                    <img src={EditBtn} onClick={editType} />
                </div>

                <div>
                    <p><span>Property Condition</span><br />{props.condition}</p>
                    <img src={EditBtn} onClick={editCondition} />
                </div>

                <div>
                    <p><span>Property Value</span><br />{props.value}</p>
                    <img src={EditBtn} onClick={editValue} />
                </div>

                <div>
                    <p><span>Sale Timeline</span><br />{props.timeline}</p>
                    <img src={EditBtn} onClick={editTimeline} />
                </div>

                <div>
                    <p><span>Address</span><br />{props.address}</p>
                    <img src={EditBtn} onClick={editAddress} />
                </div>

                <div>
                    <p><span>Zip Code</span><br />{props.zip}</p>
                    <img src={EditBtn} onClick={editZip} />
                </div>

                <div>
                    <p><span>Name</span><br />{props.name}</p>
                    <img src={EditBtn} onClick={editName} />
                </div>

                <div>
                    <p><span>Phone</span><br />{props.phone}</p>
                    <img src={EditBtn} onClick={editPhone} />
                </div>

                <div>
                    <p><span>Email</span><br />{props.email}</p>
                    <img src={EditBtn} onClick={editEmail} />
                </div>
            </Content>
        </RundownWrap>
    )
}

export default Rundown;