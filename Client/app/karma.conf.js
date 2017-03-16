// Karma configuration
// Generated on Sun Mar 12 2017 13:28:20 GMT-0400 (EDT)

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './libs/jquery-1.11.1.min.js',
            './libs/angular.js',
            './libs/*.js',
            './app.module.js',
            './*/*.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}