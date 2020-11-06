/*
 *
 * Header
 *
 */

import React from 'react';
import { ANCHOR } from 'utils/constant';
import { useDevice } from '@/hooks';
import DesktopView from './DesktopView';
import { css, theme } from '@/utils';
import styled from 'styled-components';

const HeaderContainer = (props) => {
    const { isMobile } = useDevice();

    return (
        <S.Header testId="header" id={ANCHOR.GLOBAL_HEADER_ID}>
            {!isMobile ? <DesktopView {...props} /> : <div>모바일 헤더</div>}
        </S.Header>
    );
};

const S: any = {};

S.Header = styled.header.attrs(({ testId }: { testId: string }) => ({
    'data-test-id': testId,
}))`
    width: 100%;
    ${css.flex('justify-center')};
    height: ${css.APP_HEADER_HEIGHT};
    color: ${theme('header.fg')};
    background-color: ${theme('header.bg')};
`;

export default HeaderContainer;
