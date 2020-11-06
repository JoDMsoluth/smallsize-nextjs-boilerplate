import React from 'react';
import S from './styles';

export type ToggleSwitchProps = {
    checked?: boolean;
    disabled?: boolean;
    onChange?: () => void;
    backgroundColorChecked?: string;
    backgroundColorUnchecked?: string;
    backgroundColorButton?: string;
    name?: string;
    value?: string;
    labelRight?: string;
    labelLeft?: string;
    sliderWidth?: number;
    sliderHeight?: number;
    width?: number;
    height?: number;
    translate?: any;
};

const ToggleSwitch = ({
    onChange,
    checked,
    disabled,
    width,
    height,
    translate,
    backgroundColorChecked,
    backgroundColorUnchecked,
    backgroundColorButton,
    name,
    value,
    labelRight,
    labelLeft,
    sliderWidth,
    sliderHeight,
}: ToggleSwitchProps) => {
    return (
        <S.ToggleSwitchWrap>
            {labelLeft && <S.Label>{labelLeft}</S.Label>}
            <S.ToggleSwitch width={width} height={height}>
                <S.Checkbox
                    type="checkbox"
                    onChange={onChange}
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    translate={translate}
                    backgroundColorUnchecked={backgroundColorUnchecked}
                    backgroundColorChecked={backgroundColorChecked}
                />
                <S.Slider
                    sliderWidth={sliderWidth}
                    sliderHeight={sliderHeight}
                    backgroundColorUnchecked={backgroundColorUnchecked}
                    backgroundColorButton={backgroundColorButton}
                />
            </S.ToggleSwitch>
            {labelRight && <S.Label>{labelRight}</S.Label>}
        </S.ToggleSwitchWrap>
    );
};

ToggleSwitch.defaultProps = {
    backgroundColorChecked: '#4d4d4d',
    backgroundColorUnchecked: '#20c997',
    backgroundColorButton: '#fff',
    sliderWidth: 26,
    sliderHeight: 26,
    width: 60,
    height: 34,
    translate: 26,
};

export default ToggleSwitch;
