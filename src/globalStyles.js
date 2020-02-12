import styled from 'styled-components';
import { fonts, colors, media } from './vars';

export const Content = styled.section`
    width: 100%;
    // border: 1px solid blue;
    margin-top: -50px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    ${media.tablet} {
        margin-top: -80px;
    }

    ${media.largeTablet} {
        margin-top: -125px;
    }

    ${media.desktop} {
        margin-top: -150px;
    }

    ${media.modern} {
        // margin-top: -170px;
    }

    h1 {
        font-size: 26px;
        color: ${colors.black};
        font-family: ${fonts.primary};
        font-style: italic;
        text-align: center;
        font-weight: 500;
        line-height: 32px;

        ${media.tablet} {
            font-size: 28px;
            line-height: 32px;
        }
    
        ${media.largeTablet} {
            font-size: 30px;
            line-height: 34px;
        }

        span {
            font-size: 36px;
            color: ${colors.primary};
        }
    }

    .btn-inactive {
        width: 225px;
        height: 50px;
        background-color: ${colors.white};
        box-shadow: 0 0 8px ${colors.shadow};
        border-radius: 10px;
        margin: 10px 0 6px 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }

    .btn-active {
        width: 225px;
        height: 50px;
        background-color: ${colors.primary};
        box-shadow: 0 0 8px ${colors.shadow};
        border-radius: 10px;
        margin: 10px 0 6px 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }

    button {
        background-color: ${colors.white};
        border: none;
        color: ${colors.primary};
        font-family: ${fonts.primary};
        font-weight: 700;
        font-size: 22px;
        margin-top: 15px;
        cursor: pointer;

        ${media.tablet} {
            font-size: 24px;
        }

        ${media.largeTablet} {
            font-size: 26px;
        }
    }
`;

export const Button = styled.div`
    img {
        width: 56px;
        height: 56px;
        position: absolute;
        margin-left: 8px;
        margin-top: -2px;
        // shadow: 0 0 6px ${colors.shadow};
        // left: 4px;
        // bottom: 5px;
    }

    .radio-inactive {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid ${colors.shadow};
        margin-left: 20px;
        background-color: ${colors.white};
    }

    .radio-active {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid ${colors.white};
        margin-left: 20px;
        background-color: ${colors.white};
    }

    .text-inactive {
        font-family: ${fonts.primary};
        color: ${colors.black};
        font-weight: 400;
        font-size: 18px;
        margin-left: 22px;
    }

    .text-active {
        font-family: ${fonts.primary};
        color: ${colors.white};
        font-weight: 400;
        font-size: 18px;
        margin-left: 22px;
    }
`;

export const Input = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 6px;
    box-shadow: 0 0 8px ${colors.shadow};
    border: 1px solid transparent;
    font-family: ${fonts.primary};
    font-size: 18px;
    color: ${colors.shadow};
    padding: 0 0 0 10px;
    margin: 10px 0 6px 0;
`;