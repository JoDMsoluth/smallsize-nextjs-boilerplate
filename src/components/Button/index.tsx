import React from 'react';
import styled from 'styled-components';
import { DiAtom } from 'react-icons/di';

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
    background-color: gray;
    color: white;
    & > svg {
        color: blue;
    }
`;
