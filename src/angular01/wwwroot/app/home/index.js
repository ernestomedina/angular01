/*!
* @(#)home/index.js
* @author: Diego Guevara <github.com/diegoguevara>
* Created: 2016.2
* home controller
*/

/* global appControllers, $ */
'use strict';

/**
 * Controller home/index
 * @controller home_index_ctrl
 * @param  {object}     $scope              {@link https://docs.angularjs.org/guide/scope}
 * @param  {object}     $rootScope          {@link https://docs.angularjs.org/api/ng/service/$rootScope}
 * @param  {object}     $routeParams        {@link https://docs.angularjs.org/api/ngRoute/service/$routeParams}
 * @param  {object}     $location           {@link https://docs.angularjs.org/api/ng/service/$location}
 */
appControllers.controller(
    'home_index_ctrl',
    ['$scope', '$rootScope', '$routeParams', '$location',
    function ($scope, $rootScope, $routeParams, $location) {

        console.log(' Controller para home ...');
    }
]);

