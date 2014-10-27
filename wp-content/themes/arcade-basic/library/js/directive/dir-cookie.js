/**
 * Created by darryn on 21/04/2014.
 */


'use strict';

define(['angular', 'services'], function(angular, services, cookies) {

    /* Directives */

    angular.module('americaTrip.directives', ['americaTrip.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                console.log('directive');
                //       var Visits = $.cookie('blogVisits')
                //        ,last = Visits.length;
                //
                //        for (var i = 0; i < Visits.length; i++) {
                //            console.log(Visits[i].id);
                //        }
                setTimeout(function () {
                    cookies.checkCookies();
                }, 900);
                //    if ($('.wp-caption')) {
                //      $('.entry-content div').eq(0).append('<div class="gall">');
                //      $('.entry-content div').last().prepend('</div>');
                //    }
            };
        }]);
});
