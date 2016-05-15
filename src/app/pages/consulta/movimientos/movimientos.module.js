/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('consulta.movimientos', {
          url: '/movimientos',
          templateUrl: 'app/pages/consulta/movimientos/movimientos.html',
          title: 'Movimientos',
          sidebarMeta: {
            order: 300,
          },
        });
  }
    angular.module('BlurAdmin.pages.consulta.movimientos', [])
           .config(routeConfig);
})();
