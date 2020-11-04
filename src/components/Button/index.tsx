import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: string;
    [key: string]: any;
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button type="button" {...props}>
            {children}
        </button>
    );
}

const S: any = {};

S.Button = styled.button`
    background-color: red;
    color: white;
`;
