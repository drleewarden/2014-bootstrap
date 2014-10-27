/**
 * Created by darryn on 13/10/2014.
 */
'use strict';

define([
    'angular',

    'services/services',
    'directive/dir-cookie',
    'controller'

], function (angular,  services, directives, controller) {

    // Declare app level module which depends on filters, and services

    return angular.module('americaTrip', [
        'angular',

        'americaTrip.services',
        'americaTrip.directives',
        'americaTrip.controller'

    ]);
});