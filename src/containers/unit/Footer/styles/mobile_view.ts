import styled from 'styled-components';

import { theme, css } from '../../../../../utils';

export const Wrapper = styled.div`
    height: 150px;
    width: 100%;
`;
export const SiteWrapper = styled.div`
    ${css.flex('align-both')};
    width: 100%;
    height: 40px;
    margin-top: 20px;
`;
export const SiteLogo = styled.img`
    fill: #196f71;
    width: 18px;
    height: 18px;
    display: block;
`;
export const SiteTitle = styled.div`
    font-size: 14px;
    color: #196f71;
    margin-left: 10px;
    margin-top: 1px;
`;
export const SiteInfoWrapper = styled.div`
    ${css.flex('align-both')};
`;
export const Item = styled.div`
    ${css.flex('align-center')};
    color: ${theme('footer.text')};
    font-size: 12px;
`;
export const ItemIcon = styled.img`
    fill: ${theme('baseColor.red')};
    width: 10px;
    height: 10px;
    display: block;
    margin-left: 5px;
`;
export const Divider = styled.div`
    background: ${theme('footer.text')};
`;
export const VersionWrapper = styled.div`
    ${css.flex('align-both')};
    margin-top: 10px;
`;
