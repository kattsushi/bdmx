/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('pagos.consulta', {
          url: '/consulta',
          templateUrl: 'app/pages/pagos/consulta/consulta.html',
          title: 'Consulta de Pagos',
          sidebarMeta: {
            order: 100,
          },
        });
  }
  angular.module('BlurAdmin.pages.pagos.consulta', [])
         .config(routeConfig);
})();
