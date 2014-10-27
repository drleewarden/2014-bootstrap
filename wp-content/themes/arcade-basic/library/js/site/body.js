/**
 * @class Site.features.Accordion
 * @singleton
 *
 * @requires FCV
 */

define(['jquery'], function ($) {

  //  window.cat = function (url) {
  //    alert('sad')
  //  };

  return {
    test: function () {

      var w = $('.element-item').width();
      $('.front, .back').width(w);

      $('.back').click(function () {
        $(this).parents('.flipper').removeClass('flip-r');
      });
      $('.flipper .front').click(function () {
        $(this).parents('.flipper').addClass('flip-r');
      });



    }


    /**
     * Gets executed automatically, because this is a singleton.
     */

  };

});
