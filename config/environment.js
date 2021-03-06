/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'homepage-cli',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com https://mandrillapp.com/api/1.0/messages/send.json",
      'frame-src': "'self' https://airtable.com/embed/shrqS8yD7uUBR62VB",
      'img-src': "'self' https://s3.amazonaws.com http://fredericoandrade.com https://static.airtable.com/images/airtable_database@2x.png",
      'font-src': "'self' http://fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' http://www.google-analytics.com/analytics.js http://www.googletagmanager.com/gtm.js?id=GTM-5W4CXN https://static.airtable.com/js/embed/airtable_embed.js https://static.airtable.com/js/embed/airtable_embed_main.js"
    },
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

  if (environment === 'production') {
    // ENV.baseURL = '/garden/wikitongues/landingPage';
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
