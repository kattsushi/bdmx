/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('pagos', {
          url: '/pagos',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Pagos',
          sidebarMeta: {
            icon: 'ion-cash',
            order: 200,
          },
        });
  }
  angular.module('BlurAdmin.pages.pagos', [
                                        'BlurAdmin.pages.pagos.consulta',
                                        'BlurAdmin.pages.pagos.pagosDirectos',
                                        'BlurAdmin.pages.pagos.cargoAutomatico'
                                       ])
         .config(routeConfig);

})();
