//tsdx.config.js
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('rollup-plugin-postcss');
const image = require('@rollup/plugin-image');
const replace = require('@rollup/plugin-replace');

module.exports = {
    rollup(config, options) {
        config.plugins.push(postcss({
            plugins: [
                autoprefixer(),
                cssnano({
                    preset: 'default',
                })
            ],
            // only write out CSS for the first bundle (avoids redundant extra files)
            extract: !!options.writeMeta,
            inject: false,
        }))
        config.plugins.push(image())
        config.plugins = config.plugins.map(p =>
            p.name === 'replace'
                ? replace({
                    preventAssignment: true,
                })
                : p
        );
        return config;
    },
};