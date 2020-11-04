import React from 'react';

interface ErrorDescProps {
    errorCode?: number;
}

const ErrorDesc = ({ errorCode }: ErrorDescProps) => {
    switch (errorCode) {
        case 404:
            return <div>페이지를 찾을 수 없습니다.</div>;
        default:
            return <div>알 수 없는 에러 발생</div>;
    }
};

export default React.memo(ErrorDesc);
