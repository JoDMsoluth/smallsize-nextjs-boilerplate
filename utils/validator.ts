export const isObject = (value) => {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

export const isString = (value) => {
    if (typeof value === 'string' || value instanceof String) {
        return true;
    }
    return false;
};

export const emptyArray = (obj) => Array.isArray(obj) && obj.length === 0;

// avoid trim on int
export const trimIfNeed = (str) => {
    if (isString(str)) return (str as string).trim();
    return str;
};
