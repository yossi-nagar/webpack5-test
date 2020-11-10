

module.exports = {
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },

    devServer: {
        port: 3000,
        open: true,
        disableHostCheck: true,
        writeToDisk: true,
        compress: true
    }
}