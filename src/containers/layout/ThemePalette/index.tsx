/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
 */

import { themeSkins } from '@/utils';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '@/config';

// import MarkDownStyle from './MarkDownStyle'
import GlobalStyle from './GlobalStyle';

interface ThemeContainerProps {
    children: JSX.Element;
    theme: any;
}
const ThemeContainer = ({ children, theme }: ThemeContainerProps) => {
    const [themeState, setThemeState] = useState<string>(DEFAULT_THEME);

    useEffect(() => setThemeState(theme), [theme]);
    return (
        <ThemeProvider theme={themeSkins[themeState]}>
            <div>{children}</div>
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default ThemeContainer;

// about meta theme-color
// see: https://stackoverflow.com/questions/26960703/how-to-change-the-color-of-header-bar-and-address-bar-in-newest-chrome-version-o
