/*
 *
 * DesktopView
 *
 */

import ToggleSwitch from '@/components/ToggleSwitch';
import { changeTheme, themeState } from '@/recoil/theme';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import S from './styles';

const HeaderContainer = () => {
    const theme = useRecoilValue(themeState);
    const setTheme = useSetRecoilState(changeTheme);

    return (
        <React.Fragment>
            <span>PC 헤더</span>
            <S.Wrap>
                <ToggleSwitch
                    onChange={() => {
                        setTheme(null);
                    }}
                    checked={theme === 'dark'}
                    width={40}
                    height={20}
                    sliderWidth={12}
                    sliderHeight={12}
                    translate={19}
                />
            </S.Wrap>
        </React.Fragment>
    );
};

export default HeaderContainer;
