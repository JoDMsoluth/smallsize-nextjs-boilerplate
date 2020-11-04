/*
 * utils functiosn
 */

export { buildLog } from './logger';

export { default as uid } from './uid';

export {
    Global,
    o2s,
    s2o,
    send,
    getRandomInt,
    cutFrom,
    prettyNum,
    numberWithCommas,
    countWords,
    debounce,
    extractAttachments,
} from './helper';

export {
    scrollIntoEle,
    scrollToHeader,
    scrollToTabber,
    scrollToTop,
    lockPage,
    unlockPage,
    focusDoraemonBar,
    blurDoraemonBar,
    hideDoraemonBarRecover,
    isBrowser,
    toggleGlobalBlur,
    clearGlobalBlur,
} from './dom';
/*
 * theme related
 */
export { theme, themeMeta, themeSkins } from './themes';

export { isObject, isString, emptyArray, trimIfNeed } from './validator';

// helpers
export { default as animate } from './animations';
export { default as css } from './css';
export { default as BStore } from './bstore';

export { isMobile } from './device';
