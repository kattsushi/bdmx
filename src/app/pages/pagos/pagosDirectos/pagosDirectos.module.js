/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('pagos.pagosDirectos', {
          url: '/pagosDirectos',
          templateUrl: 'app/pages/pagos/pagosDirectos/pagosDirectos.html',
          title: 'Pagos Directos',
          sidebarMeta: {
            order: 300,
          },
        });
  }
    angular.module('BlurAdmin.pages.pagos.pagosDirectos', [])
           .config(routeConfig);
})();
