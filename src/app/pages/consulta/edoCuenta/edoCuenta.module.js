/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('consulta.edoCuenta', {
          url: '/edoCuenta',
          templateUrl: 'app/pages/consulta/edoCuenta/edoCuenta.html',
          title: 'Estado de Cuenta',
          sidebarMeta: {
            order: 200,
          },
        });
  }
  angular.module('BlurAdmin.pages.consulta.edoCuenta', [])
         .config(routeConfig);
})();
