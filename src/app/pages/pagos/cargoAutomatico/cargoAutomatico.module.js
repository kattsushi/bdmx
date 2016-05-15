/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('pagos.cargoAutomatico', {
          url: '/cargoAutomatico',
          templateUrl: 'app/pages/pagos/cargoAutomatico/cargoAutomatico.html',
          title: 'Cargo Automatico Cta',
          sidebarMeta: {
            order: 400,
          },
        });
  }
  angular.module('BlurAdmin.pages.pagos.cargoAutomatico', [])
         .config(routeConfig);
})();
