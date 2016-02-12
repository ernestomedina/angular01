/*!
* @(#)users/detail.js
* @author: Diego Guevara <github.com/diegoguevara>
* Created: 2016.2
* users detail controller
*/

/* global appControllers, $ */
'use strict';

/**
 * Controller users/detail
 * @controller users_detail_ctrl
 * @param  {object}     $scope              {@link https://docs.angularjs.org/guide/scope}
 * @param  {object}     $rootScope          {@link https://docs.angularjs.org/api/ng/service/$rootScope}
 * @param  {object}     $routeParams        {@link https://docs.angularjs.org/api/ngRoute/service/$routeParams}
 * @param  {object}     $location           {@link https://docs.angularjs.org/api/ng/service/$location}
 */
appControllers.controller(
    'users_detail_ctrl',
    ['$scope', '$rootScope', '$routeParams', '$location', 'RestfulResources',
    function ($scope, $rootScope, $routeParams, $location, RestfulResources) {

        $scope.getUserDetail = function () {
            RestfulResources.Users.get({ id : $routeParams.id }, function (data_) {
                $scope.user_data = data_;
                console.log(data_);
            });
        }

        $scope.getUserDetail();

    }
]);

