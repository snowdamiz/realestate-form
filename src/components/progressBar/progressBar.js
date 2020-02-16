import React, { useState, useEffect } from 'react';
import { ProgressBarWrap } from './progressBarStyles';

function ProgressBar(props) {
    const [percent, setPercent] = useState("");

    useEffect(() => {
        if (props.page === 1) setPercent("0%");
        if (props.page === 2) setPercent("25%");
        if (props.page === 3) setPercent("40%");
        if (props.page === 4) setPercent("70%");
        if (props.page === 5) setPercent("90%");
        if (props.page === 6) setPercent("95%");
    }, []);

    return (
        <ProgressBarWrap>
            <div className={'circle' + props.page}></div>
            <p className={'percent' + props.page}><span>Progress:</span> {percent}</p>
        </ProgressBarWrap>
    )
}

export default ProgressBar;