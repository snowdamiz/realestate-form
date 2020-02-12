import React from 'react';
import { ProgressBarWrap } from './progressBarStyles';

function ProgressBar(props) {
    return (
        <ProgressBarWrap>
            <div className={'circle' + props.page}></div>
        </ProgressBarWrap>
    )
}

export default ProgressBar;