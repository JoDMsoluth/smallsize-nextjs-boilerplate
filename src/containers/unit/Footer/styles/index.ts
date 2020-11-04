import styled from 'styled-components';

import { css } from '../../../../utils';

export const Wrapper = styled.footer.attrs((props: any) => ({
    'data-test-id': props.testId,
}))`
    ${css.flex('justify-center')};
    margin-top: 50px;
`;
export const Holder = 1;
