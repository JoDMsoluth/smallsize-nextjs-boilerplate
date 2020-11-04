/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
 */

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

// import MarkDownStyle from './MarkDownStyle'
import GlobalStyle from './GlobalStyle';

const ThemeContainer = ({ children, theme: { themeData } }) => {
    return (
        <ThemeProvider theme={themeData}>
            <Head>
                <meta name="theme-color" content={themeData.mobileTab} />
            </Head>
            <div>{children}</div>
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default ThemeContainer;

// about meta theme-color
// see: https://stackoverflow.com/questions/26960703/how-to-change-the-color-of-header-bar-and-address-bar-in-newest-chrome-version-o
