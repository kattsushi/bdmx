/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('consulta', {
          url: '/consulta',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Consulta',
          sidebarMeta: {
            icon: 'ion-card',
            order: 100,
          },
        });
  }
  angular.module('BlurAdmin.pages.consulta', [
                                        'BlurAdmin.pages.consulta.movimientos',
                                        'BlurAdmin.pages.consulta.saldo',
                                        'BlurAdmin.pages.consulta.edoCuenta'
                                       ])
         .config(routeConfig);

})();
