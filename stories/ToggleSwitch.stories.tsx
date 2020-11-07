import ToggleSwitch from '@/components/ToggleSwitch';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { css } from '@/utils';

export default {
    title: 'components|ToggleSwitch',
    component: ToggleSwitch,
    decorators: [withKnobs],
};

export const ThemeSwitch = () => {
    const backgroundColorChecked = text('backgroundColorChecked', '#4d4d4d');
    const backgroundColorUnchecked = text(
        'backgroundColorUnchecked',
        '#20c997'
    );
    const backgroundColorButton = text('backgroundColorButton', '#fff');

    const width = number('width', 40);
    const height = number('height', 20);
    const sliderWidth = number('sliderWidth', 12);
    const sliderHeight = number('sliderHeight', 12);
    const translate = number('translate', 19);

    return (
        <>
            <S.Wrap>
                <ToggleSwitch
                    width={width}
                    height={height}
                    backgroundColorChecked={backgroundColorChecked}
                    backgroundColorUnchecked={backgroundColorUnchecked}
                    backgroundColorButton={backgroundColorButton}
                    checked={true}
                    sliderWidth={sliderWidth}
                    sliderHeight={sliderHeight}
                    translate={translate}
                    onChange={action('onChange 이벤트 발생')}
                />

                <ToggleSwitch
                    width={width}
                    height={height}
                    backgroundColorChecked={backgroundColorChecked}
                    backgroundColorUnchecked={backgroundColorUnchecked}
                    backgroundColorButton={backgroundColorButton}
                    checked={false}
                    sliderWidth={sliderWidth}
                    sliderHeight={sliderHeight}
                    translate={translate}
                    onChange={action('onChange 이벤트 발생')}
                />
            </S.Wrap>
        </>
    );
};

ThemeSwitch.story = {
    name: 'ToggleSwitch',
};

const S: any = {};

S.Wrap = styled.div`
    height: 10rem;
    ${css.flexColumn('align-both', 'justify-around')};
`;
