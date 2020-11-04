import React from 'react';

interface NotFoundMessageProps {
    page?: string;
}

const NotFoundMessage = ({ page }: NotFoundMessageProps) => {
    switch (page) {
        case 'post':
            return <div>해당 포스트를 찾을 수 없습니다.</div>;
        default:
            return <div>페이지를 찾을 수 없습니다.</div>;
    }
};

export default React.memo(NotFoundMessage);
