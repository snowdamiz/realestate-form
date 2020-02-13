import styled from 'styled-components';
import { fonts, colors, media } from './vars';

export const Content = styled.section`
    width: 100%;
    // border: 1px solid blue;
    margin-top: -40px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 40px;

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
        font-size: 24px;
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

    .slider {
        margin: 0px auto;
        width: 320px;
    }

    .value {
        margin: 0px auto;
        text-align: center;
        font-family: ${fonts.primary};
        color: ${colors.dark};
        font-weight: 500;
        font-size: 16px;
        border: 1px solid ${colors.shadow};
        border-radius: 5px;
        width: 120px;
        padding: 10px 0;
    }

    .rangeslider__fill {
        background-color: #fff;
        border: 1px solid ${colors.shadow};
        width: 320px !important;
    }

    .rangeslider__handle {
        background-color: ${colors.primary};
        border: 1px solid transparent;

        &::after {
            background-color: ${colors.primary};
            box-shadow: none;
        }
    }

    .btn-inactive {
        height: 54px;
        background-color: ${colors.white};
        box-shadow: 0 0 8px ${colors.shadow};
        border-radius: 10px;
        margin: 10px 0 6px 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 2px solid ${colors.white};
        padding: 0 30px 0 0;
        min-width: 180px;
    }

    .btn-active {
        height: 54px;
        background-color: ${colors.primary};
        box-shadow: 0 0 8px ${colors.shadow};
        border-radius: 10px;
        margin: 10px 0 6px 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 2px solid transparent;
        padding: 0 30px 0 0;
        min-width: 180px;
    }

    .nextStep {
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

    .nextStepValue {
        background-color: ${colors.white};
        border: none;
        color: ${colors.primary};
        font-family: ${fonts.primary};
        font-weight: 700;
        font-size: 22px;
        margin-top: 60px;
        cursor: pointer;

        ${media.tablet} {
            font-size: 24px;
        }

        ${media.largeTablet} {
            font-size: 26px;
        }
    }

    .prevStep {
        border: none;
        color: ${colors.shadow};
        font-family: ${fonts.primary};
        background-color: transparent;
        position: absolute;
        bottom: 30px;
        cursor: pointer;
    }

    .detailsBox {
        width: 260px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #efefef;
        margin-bottom: 8px;
        padding: 0 10px 0 10px;
        border-radius: 5px;

        p {
            font-family: ${fonts.primary};
            color: ${colors.shadow};
            font-size: 16px;
            

            span {
                color: ${colors.black};
                font-size: 18px;
                font-weight: 600;
            }
        }

        .editBtn {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
    }

    .error {
        font-family: ${fonts.primary};
        font-size: 14px;
        font-weight: 700;
        color: red;
    }

    .submitBtn {
        width: 160px;
        height: 50px;
        border: 1px solid ${colors.primary};
        background-color: ${colors.primary};
        color: ${colors.white};
        font-family: ${fonts.primary};
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 15px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: ${colors.white};
            color: ${colors.secondary};
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
        margin-top: 0px;
        background-color: ${colors.white};
    }

    .radio-active {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid ${colors.white};
        // margin-left: 20px;
        // margin-top: 0px;
        background-color: ${colors.white};
    }

    .text-inactive {
        // border: 1px solid red;
        font-family: ${fonts.primary};
        color: ${colors.black};
        font-weight: 400;
        font-size: 18px;
        margin-left: 30px;
        // margin-top: 19px;

        .text-inactive sm {
            // margin-left: 30px;
        }
    }



    .text-active {
        font-family: ${fonts.primary};
        color: ${colors.white};
        font-weight: 400;
        font-size: 18px;
        margin-left: 30px;
        // margin-top: 19px;

        .sm {
            // margin-left: 30px;
        }
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