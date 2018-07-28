const path = require('path');
module.exports = [
    {
        entry: ['./scripts/render-map.js'],
        output: {
            filename:  'scripts/bundle.js','scripts/map.js',
            path: __dirname
        }
    }
];
