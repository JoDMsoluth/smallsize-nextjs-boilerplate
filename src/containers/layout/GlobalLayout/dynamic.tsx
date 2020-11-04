import React from 'react';
import dynamic from 'next/dynamic';

export const Footer = dynamic(() => import('../../unit/Footer'), {
    /* eslint-disable react/display-name */
    loading: () => <div />,
    ssr: false,
});

export const ErrorPage = dynamic(
    () => import('../../../components/ErrorPage'),
    {
        /* eslint-disable react/display-name */
        loading: () => <div />,
        ssr: false,
    }
);
