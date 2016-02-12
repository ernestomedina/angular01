/*!
* @(#)models.js
* @author: Diego Guevara <github.com/diegoguevara>
* Created: 2016.2
* Configurcion de conexion a recursos restful del Backend
*/

/* global appModels */

/**
 * Servicio de conexion a los recursos del API Restful
 * @factory
 * @param {object} $resource Angularjs $resource object
 */
appModels.factory('RestfulResources', ['$resource',
    function ($resource) {
        return {
            
            Users : $resource('api/users/:id', { id: '@id' }, { 'update': { method: 'PUT' } })
            
        };
    }
]);