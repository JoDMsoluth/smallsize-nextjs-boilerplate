import React from 'react';
import styled from 'styled-components';
import { DiAtom } from 'react-icons/di';
import { theme } from '@/utils';

interface ButtonProps {
    children: string;
    [key: string]: any;
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <S.Button type="button" {...props}>
            <DiAtom />
            {children}
        </S.Button>
    );
}

const S: any = {};

S.Button = styled.button`
    background-color: ${theme('button.fg')};
    color: ${theme('button.primary')};
    & > svg {
        color: blue;
    }
    &:hover {
        background-color: ${theme('button.hoverBg')};
    }
    &:active {
        background-color: ${theme('button.activeBg')};
    }
`;
