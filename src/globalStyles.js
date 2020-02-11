import styled from 'styled-components';
import { fonts, colors, media } from './vars';

export const Content = styled.section`
    width: 100%;
    // border: 1px solid blue;
    margin-top: -30px;

    ${media.tablet} {
        margin-top: -40px;
    }

    ${media.largeTablet} {
        margin-top: -60px;
    }

    ${media.desktop} {
        margin-top: -90px;
    }

    ${media.modern} {
        margin-top: -120px;
    }

    h1 {
        font-size: 28px;
        color: ${colors.black};
        font-family: ${fonts.primary};
        font-style: italic;
        text-align: center;
        font-weight: 500;
        line-height: 32px;

        ${media.tablet} {
            font-size: 30px;
            line-height: 36px;
        }
    
        ${media.largeTablet} {
            font-size: 34px;
            line-height: 40px;
        }

        span {
            font-size: 36px;
            color: ${colors.primary};
        }
    }
`;