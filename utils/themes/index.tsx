import { path, split } from 'ramda';
import skinsData from './skins';

// white, dark
export const themeSkins = { ...skinsData };

// curried shorthand for style-components
export const theme = (themePath) => {
    return path(['theme', ...split('.', themePath)]);
};

export { default as themeMeta } from './theme_meta';
