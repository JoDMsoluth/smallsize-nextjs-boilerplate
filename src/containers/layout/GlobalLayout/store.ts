/*
 * GlobalLayoutStore store
 *
 */

import { atom, selector } from 'recoil';
import { buildLog } from '../../../../utils';

/* eslint-disable-next-line */
const log = buildLog('S:GlobalLayoutStore');

export const themeState = atom({
    key: 'theme',
    default: 'white',
});

export const changeTheme = selector({
    key: 'changeTheme',
    get: ({ get }) => get(themeState),
});
