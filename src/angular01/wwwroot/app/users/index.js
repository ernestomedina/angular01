/*!
* @(#)users/index.js
* @author: Diego Guevara <github.com/diegoguevara>
* Created: 2016.2
* users controller
*/

/* global appControllers, $ */
'use strict';

/**
 * Controller users/index
 * @controller users_index_ctrl
 * @param  {object}     $scope              {@link https://docs.angularjs.org/guide/scope}
 * @param  {object}     $rootScope          {@link https://docs.angularjs.org/api/ng/service/$rootScope}
 * @param  {object}     $routeParams        {@link https://docs.angularjs.org/api/ngRoute/service/$routeParams}
 * @param  {object}     $location           {@link https://docs.angularjs.org/api/ng/service/$location}
 */
appControllers.controller(
    'users_index_ctrl',
    ['$scope', '$rootScope', '$routeParams', '$location', 'RestfulResources',
    function ($scope, $rootScope, $routeParams, $location, RestfulResources) {

        $scope.getUsers = function () {
            RestfulResources.Users.query({}, function (data_) {
                $scope.users = data_;
                console.log(data_);
            });
        }

        $scope.getUsers();

        $scope.getDetail = function (itm_) {
            $location.path('/users/' + itm_.id );
        }
    }
]);

