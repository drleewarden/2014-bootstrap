requirejs.config({
  baseUrl: 'wp-content/themes/arcade-basic/library/js/',

  paths: {

    jQ: 'vendor/jquery-2.1.0.min',
    angular: 'vendor/angular.min',
    bootstrap: 'vendor/bootstrap.min',
    iso: 'vendor/isotope.pkgd.min',
    cookie: 'vendor/jquery.cookie',
    modn: 'vendor/modernizr.custom.71147',
    touch: 'vendor/jquery.touchSwipe.min',
    carousel: 'vendor/carouFredSel',

    app: 'app',

    body: 'site/body'


  },

  // Dependencies for scripts that are not wrapped as AMD modules.
  shim: {
    'jQ': {
      exports: '$'
    },
    'angular': {
      dep: ['jQ']
     ,exports: 'angular'
    },
    'bootstrap': {
      dep: ['jQ']
    },

    'cookie': {
      dep: ['jQ']
    },
    'iso': {
      dep: ['jQ']
    },
    'touch': {
      dep: ['jQ']
    },
    'carousel': {
      dep: ['jQ']
    },
    'services': {
      dep: ['jQ', 'angular', 'bootstrap', 'iso', 'cookie', 'modn', 'touch', 'carousel']
    },
    'dircookie': {
      dep: ['services']
    },
    'diriso': {
      dep: ['jQ', 'angular', 'bootstrap', 'iso', 'cookie', 'modn', 'touch', 'carousel', 'services', 'dircookie', 'diriso']
    },

    'controller': {
      dep: ['jQ', 'angular', 'bootstrap', 'iso', 'cookie', 'modn', 'touch', 'carousel', 'services', 'diriso', 'dircookie']
    },
    'app': {
      dep: ['jQ', 'angular', 'bootstrap', 'iso', 'cookie', 'modn', 'touch', 'carousel']
    },
    'body': {
      dep: ['jQ', 'angular', 'bootstrap', 'iso', 'cookie', 'modn', 'touch', 'carousel', 'services', 'diriso', 'dircookie', 'controller']
    }
  },
    priority: [
        "angular"
    ]

});

require([
  'jQ',
  'angular',
  'bootstrap',
  'iso',
  'cookie',
  'modn',
  'touch',
  'carousel',
   'app'

], function ($, angular, bootsrap, iso, cookie, modn, touch, carousel,  app) {
  body.test();
    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});
