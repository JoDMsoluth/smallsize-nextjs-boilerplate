/*
 *
 * GlobalLayout
 *
 */

import React, { useEffect } from 'react';
import { BlogJsonLdProps, NextSeoProps } from 'next-seo';

import ThemePalette from '../ThemePalette';
import { ErrorPage, Footer } from './dynamic';
import Header from '@/containers/unit/Header';
import SEO from './SEO';

import { logBuddha } from './logic';
//import { useDevice } from '../../../hooks';
import white from 'utils/themes/skins/white';
import S from './styles';

interface GlobalLayoutContainerProps {
    page: string;
    seoConfig: BlogJsonLdProps | NextSeoProps;
    errorCode?: number;
    children: JSX.Element;
}

const GlobalLayoutContainer = ({
    page,
    seoConfig,
    errorCode,
    children,
}: GlobalLayoutContainerProps) => {
    // const { isMobile } = useDevice();

    // load debug graph
    useEffect(() => logBuddha(), []);

    return (
        <ThemePalette theme={{ themeData: white }}>
            <S.Wrapper>
                {errorCode ? (
                    <ErrorPage errorCode={errorCode} page={page} />
                ) : (
                    <>
                        <SEO page={page} config={seoConfig} />

                        <S.InnerWrapper>
                            <S.ContentWrapper>
                                <Header />
                                <S.BodyWrapper>{children}</S.BodyWrapper>
                                <Footer />
                            </S.ContentWrapper>
                        </S.InnerWrapper>
                    </>
                )}
            </S.Wrapper>
        </ThemePalette>
    );
};

export default GlobalLayoutContainer;
