/*
 *
 * Footer
 *
 */

import React from 'react';

import { useDevice } from '@/hooks';

import DesktopView from './DesktopView';
import MobileView from './MobileView';
import styled from 'styled-components';
import { css, theme } from '@/utils';

const FooterContainer = (props) => {
    const { isMobile } = useDevice();

    return (
        <S.Footer>
            {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
        </S.Footer>
    );
};

const S: any = {};

S.Footer = styled.footer.attrs(({ testId }: { testId: string }) => ({
    'data-test-id': testId,
}))`
    width: 100%;
    ${css.flex('justify-center')};
    height: ${css.APP_FOOTER_HEIGHT};
    margin-top: 50px;

    color: ${theme('footer.text')};
    background-color: ${theme('footer.bottomBg')};
`;

export default FooterContainer;
