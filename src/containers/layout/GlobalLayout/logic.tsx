// import { useEffect } from 'react';

import { themeState } from '@/recoil/theme';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { BStore, buildLog, isBrowser } from '../../../../utils';

/* eslint-disable-next-line */
const log = buildLog('L:GlobalLayout');

export const logBuddha = () => {
    if (process.env.NODE_ENV === 'production') {
        /* eslint-disable */
        console.log(
            ' .......................................................\n\n\n' +
                '                       _oo0oo_                      \n' +
                '                      o8888888o                     \n' +
                '                      88" . "88           if (bug) {                  \n' +
                '                      (| -_- |)    .oO      bug = false          \n' +
                '                      0\\  =  /0           }             \n' +
                '                    ___/‘---’\\___                   \n' +
                "                  .' \\|       |/ '.                 \n" +
                '                 / \\\\|||  :  |||// \\                \n' +
                '                / _|||||-【】-|||||_ \\               \n' +
                '               |   | \\\\\\  -  /// |   |              \n' +
                "               | \\_|  ''\\---/''  |_/ |              \n" +
                "               \\  .-\\__  '-'  ___/-. /              \n" +
                "             ___'. .'  /--.--\\  '. .'___            \n" +
                '           ."" ‘<‘.___\\_<|>_/___.’>’ "".          \n' +
                '        | | :  ‘- \\‘.;‘\\ _ /’;.’/ - ’ : | |        \n' +
                '         \\  \\ ‘_.   \\_ __\\ /__ _/   .-’ /  /        \n' +
                '    =====‘-.____‘.___ \\_____/___.-’___.-’=====     \n' +
                '                       ‘=---=’                      \n' +
                '                                                    \n\n' +
                '.........................................................\n\n' +
                ' ##########   https://github.com/jodmsoluth   #########\n\n' +
                '.........................................................'
        );
        /* eslint-enable */
    }
};

// ###############################
// init & uninit
// ###############################
export const useInit = (): 'white' | 'dark' => {
    // load debug graph
    const [theme, setTheme] = useRecoilState(themeState);

    useEffect(() => logBuddha(), []);

    useEffect(() => {
        if (isBrowser) {
            const storeTheme = BStore.get('theme');
            setTheme(storeTheme);
        }
    }, [isBrowser]);

    return theme;
};
