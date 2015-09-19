/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'homepage-cli',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com https://mandrillapp.com/api/1.0/messages/send.json",
      'img-src': "'self' https://s3.amazonaws.com http://fredericoandrade.com http://www.google-analytics.com/collect?v=1&_v=j38&a=791061976&t=pageview&_…13&cid=1292136968.1393544920&tid=UA-48869719-1&gtm=GTM-5W4CXN&z=1741151093 https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&v=1&_v=j38&tid=UA…69719-1&cid=1292136968.1393544920&jid=1380844313&_u=QCCAgAAB~&z=1048359631 http://www.google-analytics.com/r/collect?v=1&_v=j38&a=791061976&t=event&ni…d=1292136968.1393544920&tid=UA-48869719-1&_r=1&gtm=GTM-5W4CXN&z=1341647599",
      'font-src': "'self' http://fonts.gstatic.com",
      'style-src': "'self' http://fonts.googleapis.com",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' http://www.google-analytics.com/analytics.js http://www.googletagmanager.com/gtm.js?id=GTM-5W4CXN"
    },
    baseURL: '/folder/press-kit/',
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
