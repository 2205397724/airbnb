const path = require('path')
const CracoLessPugin = require('craco-less')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    // less
    plugins: [
        {
            plugin: CracoLessPugin,
        }
    ],
    // webpack
    webpack: {
        alias: {
            // "@":path.resolve(__dirname,"src"),
            "@": resolve("src"),
            "components": resolve("src/components"),
            "utils": resolve("src/utils"),
            // '@mui/styled-engine': '@mui/styled-engine-sc',
        }
    }
}