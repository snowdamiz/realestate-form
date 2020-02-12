import styled from 'styled-components';
import Banner from '../../assets/banner.svg';
import { fonts, colors, media } from '../../vars';

export const HeaderWrap = styled.section`
    width: 100%;
    height: 170px;
    background-color #fff;
    background-image: url('${Banner}');
    // background-size: cover;
    background-position: right;
    background-repeat: no-repeat;

    ${media.tablet} {
        height: 180px;
    }

    ${media.largeTablet} {
        height: 220px;
    }

    ${media.desktop} {
        height: 280px;
    }

    img {
        width: 50px;
        height: 50px;
        // border: 1px solid red;
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 30px;
        margin-right: 30px;
        cursor: pointer;

        ${media.largeTablet} {
            width: 60px;
            height: 60px;
            margin-top: 40px;
            margin-right: 40px;
        }

        ${media.desktop} {
            width: 70px;
            height: 70px;
            margin-top: 50px;
            margin-right: 50px;
        }
    }
`;