import { deepFind } from '../helper';
import skinsData from './skins';
import white from './skins/white';

// white, dark
export const themeSkins = { ...skinsData };

// curried shorthand for style-components
export const theme = (themePath) => {
    return deepFind(white, themePath);
};

export { default as themeMeta } from './theme_meta';
