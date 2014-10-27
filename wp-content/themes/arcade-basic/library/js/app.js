/**
 * Created by darryn on 13/10/2014.
 */
'use strict';

define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',

], function (angular, filters, services, directives, controllers) {

    // Declare app level module which depends on filters, and services

    return angular.module('americaTrip', [
        'ngRoute',
        'americaTrip.filters',
        'americaTrip.services',
        'americaTrip.directives',
        'americaTrip.controllers'
    ]);
});