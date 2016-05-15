/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('consulta.saldo', {
          url: '/saldo',
          templateUrl: 'app/pages/consulta/saldo/saldo.html',
          title: 'Saldo',
          sidebarMeta: {
            order: 100,
          },
        });
  }
  angular.module('BlurAdmin.pages.consulta.saldo', [])
         .config(routeConfig);
})();
