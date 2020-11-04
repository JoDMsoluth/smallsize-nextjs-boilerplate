/*
 *
 * Header
 *
 */

import React from 'react';

import { ANCHOR } from 'utils/constant';
import { useDevice } from '@/hooks';

const HeaderContainer = () => {
    const { isMobile } = useDevice();

    return (
        <header id={ANCHOR.GLOBAL_HEADER_ID}>
            {!isMobile ? <div>PC 헤더</div> : <div>모바일 헤더</div>}
        </header>
    );
};

export default HeaderContainer;
