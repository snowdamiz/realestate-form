import React from 'react';
import Home from '../../assets/house.svg';
import { HeaderWrap } from './headerStyles';

function Header(props) {
    const reset = () => {
        props.setPage(1);
        props.setType(null);
        props.setCondition(null);
        props.setValue(null);
        props.setTimeline(null);
        props.setAddress(null);
        props.setZip(null);
        props.setName(null);
        props.setPhone(null);
        props.setEmail(null);
    }

    return (
        <HeaderWrap>
            <img src={Home} onClick={reset} />
        </HeaderWrap>
    )
}

export default Header;