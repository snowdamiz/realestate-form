import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const ProgressBarWrap = styled.section`
    width: 320px;
    height: 7px;
    border-radius: 4px;
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    position: absolute;
    bottom: 60px;

    .circle1 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 0 6px ${colors.shadow};
        background-color: ${colors.white};
        position: absolute;
        margin: -10px 0 0 -14px;
    }

    .circle2 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 0 6px ${colors.shadow};
        background-color: ${colors.white};
        position: absolute;
        margin: -10px 0 0 80px;
    }

    .circle3 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 0 6px ${colors.shadow};
        background-color: ${colors.white};
        position: absolute;
        margin: -10px 0 0 120px;
    }

    .circle4 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 0 6px ${colors.shadow};
        background-color: ${colors.white};
        position: absolute;
        margin: -10px 0 0 180px;
    }

    .circle5 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 0 6px ${colors.shadow};
        background-color: ${colors.white};
        position: absolute;
        margin: -10px 0 0 260px;
    }

    .circle6 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 0 6px ${colors.shadow};
        background-color: ${colors.white};
        position: absolute;
        margin: -10px 0 0 315px;
    }
`;