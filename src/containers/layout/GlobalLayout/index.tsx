/*
 *
 * GlobalLayout
 *
 */

import React from 'react';
import { BlogJsonLdProps, NextSeoProps } from 'next-seo';

import ThemePalette from '../ThemePalette';
import { ErrorPage, Footer } from './dynamic';
import Header from '@/containers/unit/Header';
import SEO from './SEO';

import { useInit } from './logic';
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
    // Get Theme State
    const theme = useInit();

    return (
        <ThemePalette theme={theme}>
            <S.Wrapper>
                {errorCode ? (
                    <ErrorPage errorCode={errorCode} page={page} />
                ) : (
                    <>
                        <SEO page={page} config={seoConfig} />

                        <Header />
                        <S.InnerWrapper>
                            <S.ContentWrapper>
                                <S.BodyWrapper>{children}</S.BodyWrapper>
                            </S.ContentWrapper>
                        </S.InnerWrapper>
                        <Footer />
                    </>
                )}
            </S.Wrapper>
        </ThemePalette>
    );
};

export default GlobalLayoutContainer;
