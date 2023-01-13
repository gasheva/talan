const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                // import only variables to use everywhere
                additionalData: '@import "@/styles/_variables.scss";',
            },
        },
    },
});