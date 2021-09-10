module.exports = {
    plugins:[
        "@babel/plugin-syntax-dynamic-import",
        'transform-async-to-promises'
    ],
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current",
                },
            },
        ],
    ],
};
