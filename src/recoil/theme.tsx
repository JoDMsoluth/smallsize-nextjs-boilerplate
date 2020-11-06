import { atom, selector } from 'recoil';
import { BStore, isBrowser } from '@/utils';
import { DEFAULT_THEME } from '@/config';

const defaultTheme = (isBrowser && BStore?.get('theme')) || DEFAULT_THEME;

export const themeState = atom({
    key: 'theme',
    default: defaultTheme,
});

export const changeTheme = selector({
    key: 'changeTheme',
    get: ({ get }) => get(themeState),
    set: ({ set }, newTheme?) =>
        set(themeState, (currtheme) => {
            let theme;
            if (newTheme) {
                theme = newTheme;
            } else {
                theme = currtheme === 'white' ? 'dark' : 'white';
            }
            BStore.set('theme', theme);
            console.log('setTheme, currtheme', theme, currtheme);
            return theme;
        }),
});
