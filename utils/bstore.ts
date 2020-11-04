import store from 'store';
import Cookies from 'js-cookie';

// js-cookie details: https://github.com/js-cookie/js-cookie
// store.js details: https://github.com/marcuswestin/store.js
const BStore = {
    // NOTE: if store json, JSON.parse is not need
    // is the json is valid, result will be the json, otherwise it will be string
    get: (value, optional?) => store.get(value, optional),
    set: (key, value) => store.set(key, value),
    remove: (key) => store.remove(key),
    clearAll: () => store.clearAll(),
    cookie: {
        set: (key, val, opt = {}) => Cookies.set(key, val, opt),
        get: (key) => Cookies.get(key),
        remove: (key) => Cookies.remove(key),
    },
};

export default BStore;
