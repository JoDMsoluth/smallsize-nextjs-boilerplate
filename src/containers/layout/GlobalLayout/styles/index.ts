import styled from 'styled-components';

import { theme, css } from '../../../../../utils';

const S: any = {};

// background: #3b5456;
S.Wrapper = styled.div`
    ${css.flex('justify-center')};
    background-color: ${theme('spaceBg')};
    background-attachment: fixed;
`;

S.InnerWrapper = styled.div`
    ${css.flexColumn()};
    max-width: ${css.MAX_CONTENT_WIDTH};
    width: 100vw;
    position: relative;
    height: 100%;
    min-height: 100vh;
    background: ${theme('bodyBg')};
    transition: all 0.2s;
    ${css.media.tablet`
    position: relative;
    padding-left: 0;
  `};
`;
S.BodyWrapper = styled.div``;

S.ContentWrapper = styled.div``;

export default S;
