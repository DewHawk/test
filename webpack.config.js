const path = require('path');
module.exports = [
    {
        entry: ['./scripts/render-map.js'],
        output: {
            filename:  'dist/bundle.js',
            path: __dirname
        }
    }
];
