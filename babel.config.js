module.exports = function(api) {
    // console.log('babel config!');
    api.cache(true);
    return {

        presets: [
            ['@babel/preset-env',
                {
                    useBuiltIns: 'usage',
                    corejs: 3,
                    modules: false,
                    bugfixes: true,
                    targets: 'defaults'

                }
            ]
        ]
        // plugins: ['@babel/plugin-transform-runtime']
    }
}