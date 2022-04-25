#!/usr/bin/env node
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

const {default: CommandLoader} = require('./Core/Express/CommandLoader');
CommandLoader.load();
