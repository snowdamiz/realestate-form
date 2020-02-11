import styled from 'styled-components';
import Banner from '../../assets/banner.svg';
import { fonts, colors, media } from '../../vars';

export const HeaderWrap = styled.section`
    width: 100%;
    height: 200px;
    background-color #fff;
    background-image: url('${Banner}');
    // background-size: cover;
    background-position: right;
    background-repeat: no-repeat;

    ${media.tablet} {
        height: 240px;
    }

    ${media.largeTablet} {
        height: 260px;
    }

    ${media.desktop} {
        height: 280px;
    }

    img {
        width: 60px;
        height: 60px;
        // border: 1px solid red;
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 30px;
        margin-right: 30px;
    }
`;