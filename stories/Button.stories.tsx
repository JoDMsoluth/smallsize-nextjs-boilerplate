import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { css } from '@/utils';
import Button from '@/components/Button';

export default {
    title: 'components|Button',
    component: Button,
    decorators: [withKnobs],
};

export const CustomButton = () => {
    return (
        <>
            <S.Wrap>
                <Button onClick={action('onClick')}>버튼1</Button>
            </S.Wrap>
        </>
    );
};

CustomButton.story = {
    name: 'Button',
};

const S: any = {};

S.Wrap = styled.div`
    height: 10rem;
    ${css.flexColumn('align-both', 'justify-around')};
`;
