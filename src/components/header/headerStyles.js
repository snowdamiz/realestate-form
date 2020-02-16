import styled from 'styled-components';
import Banner from '../../assets/banner.svg';
import { fonts, colors, media } from '../../vars';

export const HeaderWrap = styled.section`
    width: 100%;
    height: 110px;
    background-color #fff;
    background-image: url('${Banner}');
    // background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    border-top: 10px solid ${colors.primary};

    ${media.tablet} {
        height: 150px;
        border-top: 12px solid ${colors.primary};
    }

    ${media.largeTablet} {
        height: 180px;
    }

    ${media.desktop} {
        height: 220px;
    }

    img {
        width: 30px;
        height: 30px;
        // border: 1px solid red;
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 15px;
        margin-right: 15px;
        cursor: pointer;

        ${media.tablet} {
            width: 36px;
            height: 36px;
            margin-top: 20px;
            margin-right: 20px;
        }

        ${media.largeTablet} {
            width: 44px;
            height: 44px;
            margin-top: 25px;
            margin-right: 25px;
        }

        ${media.desktop} {
            width: 54px;
            height: 54px;
            margin-top: 32px;
            margin-right: 32px;
        }
    }
`;