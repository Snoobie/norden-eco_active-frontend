/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' mts0.googleapis.com mts1.googleapis.com maps.googleapis.com maps.gstatic.com maxcdn.bootstrapcdn.com ajax.googleapis.com code.jquery.com",
      'font-src': "'self' data: fonts.googleapis.com fonts.gstatic.com",
      'connect-src': "'self'",
      'img-src': "'self' mts1.googleapis.com mts0.googleapis.com maps.gstatic.com maps.googleapis.com csi.gstatic.com http://localhost:4200",
      'style-src': "'self' 'unsafe-inline' maxcdn.bootstrapcdn.com fonts.googleapis.com",
      'frame-src': "s-static.ak.facebook.com"
    },
    modulePrefix: 'eco-active',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
