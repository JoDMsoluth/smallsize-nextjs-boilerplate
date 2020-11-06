import styled from 'styled-components';

import { ToggleSwitchProps } from '../';

const S: any = {};

S.ToggleSwitchWrap = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`;

S.ToggleSwitch = styled.label<Pick<ToggleSwitchProps, 'width' | 'height'>>`
    position: relative;
    display: inline-block;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    > input {
        display: none;
    }
`;

S.Checkbox = styled.input<
    Pick<
        ToggleSwitchProps,
        'backgroundColorChecked' | 'backgroundColorUnchecked' | 'translate'
    >
>`
    &:checked + span {
        background-color: ${({ backgroundColorChecked }) =>
            backgroundColorChecked};
    }
    &:disabled + span {
        background-color: ${({ backgroundColorUnchecked }) =>
            backgroundColorUnchecked};
        opacity: 0.4;
        cursor: not-allowed;
    }
    &:disabled:checked + span {
        background-color: ${({ backgroundColorChecked }) =>
            backgroundColorChecked};
        opacity: 0.4;
        cursor: not-allowed;
    }
    &:focus + span {
        box-shadow: 0 0 1px #2196f3;
    }
    &:checked + span:before {
        -webkit-transform: translateX(${({ translate }) => translate}px);
        -ms-transform: translateX(${({ translate }) => translate}px);
        transform: translateX(${({ translate }) => translate}px);
    }
`;

S.Slider = styled.span<
    Pick<
        ToggleSwitchProps,
        | 'backgroundColorUnchecked'
        | 'backgroundColorButton'
        | 'sliderHeight'
        | 'sliderWidth'
    >
>`
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ backgroundColorUnchecked }) =>
        backgroundColorUnchecked};
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 34px;
    &:before {
        position: relative;
        border-radius: 50%;
        content: '';
        height: ${({ sliderHeight }) => sliderHeight}px;
        width: ${({ sliderWidth }) => sliderWidth}px;
        left: 4px;
        background-color: ${({ backgroundColorButton }) =>
            backgroundColorButton};
        -webkit-transition: 0.2s;
        transition: 0.2s;
    }
`;

S.Label = styled.span`
    color: #777;
    font-size: 15px;
    font-family: helvetica;
    padding: 0 10px;
`;

export default S;
