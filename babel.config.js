module.exports = {
    presets: [
        [ 'next/babel', {
            'preset-env': {
                corejs     : 3,
                useBuiltIns: 'usage',
            },
        } ],
        '@emotion/babel-preset-css-prop',
    ],
    plugins: [
        '@babel/plugin-transform-object-assign',
        [ 'module-resolver', {
            root : [ './' ],
            alias: {
                '@emotion-ui/themes'    : '@emotion-ui/packages/themes/dist/cjs',
                '@emotion-ui/components': '@emotion-ui/packages/components/dist/cjs',
            },
        } ],
    ],
    env: {
        test: {
            plugins: [ 'babel-plugin-transform-dynamic-import' ],
        },
    },
};
