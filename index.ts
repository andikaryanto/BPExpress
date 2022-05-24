let config = require('./config');
require('@babel/register')({
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
});
require(config.sourcePath + '/app');
