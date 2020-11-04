const path = require('path');

// blah blah code

module.exports = ({ config }) => {
    // blah blah code
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    // Add absolute path.resolve so storybook can handle absolute import (eg. @src/resources/...)
    config.resolve.alias = {
        ...config.resolve.alias,

        // absolute path
        '@/hooks': path.resolve(__dirname, '../src/hooks'),
        '@/services': path.resolve(__dirname, '../src/services'),
        '@/containers': path.resolve(__dirname, '../src/containers'),
        '@/pages': path.resolve(__dirname, '../src/pages'),
        '@/recoil': path.resolve(__dirname, '../src/recoil'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/constant': path.resolve(__dirname, '../utils/constant'),
        '@/utils': path.resolve(__dirname, '../utils'),
        '@/public': path.resolve(__dirname, '../public'),
        '@/config': path.resolve(__dirname, '../config'),
    };

    return config;
};
