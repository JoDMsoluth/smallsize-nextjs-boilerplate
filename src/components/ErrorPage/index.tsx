/*
 *
 * ErrorPage
 *
 */

import React from 'react';

import { buildLog } from 'utils';
import NotFoundMessage from './NotFoundMessage';
import ErrorDesc from './ErrorDesc';

/* eslint-disable-next-line */
const log = buildLog('c:ErrorPage:index');

interface ErrorPageProps {
    errorCode?: number;
    page?: string;
}

const ErrorPage = ({ errorCode = 404, page = '' }: ErrorPageProps) => (
    <div>
        <div>{errorCode}</div>

        <div>
            {errorCode === 404 ? (
                <NotFoundMessage page={page} />
            ) : (
                <div>문의해주세요</div>
            )}
            <ErrorDesc errorCode={errorCode} />
        </div>
    </div>
);

export default React.memo(ErrorPage);
