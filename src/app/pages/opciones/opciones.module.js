/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('opciones', {
          url: '/opciones',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Opciones',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 500,
          },
        });
  }
  angular.module('BlurAdmin.pages.opciones', [
                                              'BlurAdmin.pages.opciones.cambiarContrasena'
                                             ])
         .config(routeConfig);

})();
