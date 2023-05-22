const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@ui': path.resolve(__dirname, 'src/components/UI'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@hoc-helpers': path.resolve(__dirname, 'src/hoc-helpers'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@context': path.resolve(__dirname, 'src/context'),
        },
    },
};
