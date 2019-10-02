module.exports = {
    entry: "./app2.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test:/\.ts$/, loader:"ts-loader"}
        ]
    }
};