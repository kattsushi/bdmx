/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('rewards.consultaPuntos', {
          url: '/consultaPuntos',
          templateUrl: 'app/pages/rewards/consultaPuntos/consultaPuntos.html',
          title: 'Consulta de Puntos',
          sidebarMeta: {
            order: 300,
          },
        });
  }
    angular.module('BlurAdmin.pages.rewards.consultaPuntos', [])
           .config(routeConfig);
})();
