import styled from 'styled-components';

import { theme, css } from '../../../../../utils';

const S: any = {};

// background: #3b5456;
S.Wrapper = styled.div`
    background-color: ${theme('spaceBg')};
    background-attachment: fixed;
`;

S.InnerWrapper = styled.main`
    min-height: ${css.APP_CONTENTS_HEIGHT};
    max-width: ${css.MAX_CONTENT_WIDTH};
    ${css.flex('justify-center')};
    width: 100vw;
    position: relative;
    background: ${theme('bodyBg')};
    transition: all 0.2s;
    ${css.media.tablet`
    position: relative;
    padding-left: 0;
  `};
`;
S.BodyWrapper = styled.main`
    background: ${theme('main')};
`;

S.ContentWrapper = styled.div``;

export default S;
