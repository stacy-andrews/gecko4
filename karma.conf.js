// Karma configuration
// Generated on Sat Oct 25 2014 09:14:29 GMT+0800 (AWST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '/Users/stacyandrews/.rvm/gems/ruby-2.1.1@gecko4/gems/angularjs-rails-1.2.22/vendor/assets/javascripts/unstable/angular.js',
      '/Users/stacyandrews/.rvm/gems/ruby-2.1.1@gecko4/gems/angularjs-rails-1.2.22/vendor/assets/javascripts/unstable/angular-mocks.js',
      '/Users/stacyandrews/.rvm/gems/ruby-2.1.1@gecko4/gems/angular-ui-bootstrap-rails-0.11.0/vendor/assets/javascripts/*.js',
      '/Users/stacyandrews/.rvm/gems/ruby-2.1.1@gecko4/gems/angular-rails-templates-0.1.3/vendor/assets/javascripts/angular-rails-templates.js.erb',
      'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js',
      'vendor/assets/javascripts/**/*.js',
      'vendor/assets/templates/*.html',
      'app/assets/javascripts/**/*.js',
      'spec/javascripts/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
