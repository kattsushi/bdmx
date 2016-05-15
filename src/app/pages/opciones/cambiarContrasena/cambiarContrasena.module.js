/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('opciones.cambiarContrasena', {
          url: '/cambiarContrasena',
          templateUrl: 'app/pages/opciones/cambiarContraseña/cambiarContrasena.html',
          title: 'Cambiar Contraseña',
          sidebarMeta: {
            order: 100,
          },
        });
  }
    angular.module('BlurAdmin.pages.opciones.cambiarContrasena', [])
           .config(routeConfig);
})();
