import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const ProgressBarWrap = styled.section`
    width: 320px;
    height: 7px;
    border-radius: 4px;
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    position: fixed;
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

    .percent1 {
        font-family: ${fonts.primary};
        position: absolute;
        margin: -40px 0 0 -38px;

        span {
            font-weight: 600;
            color: ${colors.primary};
        }
    }

    .percent2 {
        font-family: ${fonts.primary};
        position: absolute;
        margin: -40px 0 0 50px;

        span {
            font-weight: 600;
            color: ${colors.primary};
        }
    }

    .percent3 {
        font-family: ${fonts.primary};
        position: absolute;
        margin: -40px 0 0 90px;

        span {
            font-weight: 600;
            color: ${colors.primary};
        }
    }

    .percent4 {
        font-family: ${fonts.primary};
        position: absolute;
        margin: -40px 0 0 150px;

        span {
            font-weight: 600;
            color: ${colors.primary};
        }
    }

    .percent5 {
        width: 110px;
        // border: 1px solid red;
        font-family: ${fonts.primary};
        position: absolute;
        margin: -40px 0 0 230px;

        span {
            font-weight: 600;
            color: ${colors.primary};
        }
    }

    .percent6 {
        width: 115px;
        // border: 1px solid red;
        font-family: ${fonts.primary};
        position: absolute;
        margin: -40px 0 0 280px;

        span {
            font-weight: 600;
            color: ${colors.primary};
        }
    }
`;