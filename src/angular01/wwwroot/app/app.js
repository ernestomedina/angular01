/*!
* @(#)app.js
* @author: Diego Guevara <github.com/diegoguevara>
* Created: 2016.2
* Modulo principal angularjs
*/

/* global global, angular, $, moment */

'use strict';

/**
 * Definicion del modulo principal de angular, directivas y componentes requeridos
 * @module app
 */
var app_ = angular.module('app', [
    'ngRoute',           // Directiva para usar RouteProvider
    'ngResource',        // Directiva para acceso a servicios Rest con Resourse
    'ngSanitize',        // Directiva para interpretar correctamente resultados json
    'appControllers',   // controllers
    'appModels'         // models
]);




/**
 * Definicion de modulo para Controllers
 */
var appControllers = angular.module('appControllers', []);

/**
 * Definnicion de modulo para Models
 */
var appModels = angular.module('appModels', []);

/**
 * Estampa de fecha para prevenir problemas de cache en las clases js
 */
var _jsCache = new Date().getTime();

/**
 * Configuracion de $routeProvider, 
 * se define la ruta clave para cada pantalla del frontend
 * @require ngRoute
 * @module config
 * @param {object} $routeProvider    {@link https://docs.angularjs.org}
 * @param {object} $locationProvider {@link https://docs.angularjs.org}
 */
app_.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider

    .when(
    '/',
    {
        templateUrl: 'app_views/home/index.html?d=' + _jsCache,
        controller: 'home_index_ctrl'
    })

    .when(
    '/users',
    {
        templateUrl: 'app_views/users/index.html?d=' + _jsCache,
        controller: 'users_index_ctrl'
    })

    .when(
    '/users/:id/',
    {
        templateUrl: 'app_views/users/detail.html?d=' + _jsCache,
        controller: 'users_detail_ctrl'
    })



    // ruta por defecto
    .otherwise({ redirectTo: '/' });
}]);

