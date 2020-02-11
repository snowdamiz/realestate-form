import styled from 'styled-components';
import Banner from '../../assets/banner.svg';
import { fonts, colors, media } from '../../vars';

export const HeaderWrap = styled.section`
    width: 100%;
    height: 240px;
    background-color #fff;
    background-image: url('${Banner}');
    // background-size: cover;
    background-position: right;
    background-repeat: no-repeat;

    img {
        width: 60px;
        height: 60px;
        // border: 1px solid red;
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 40px;
        margin-right: 40px;
    }
`;