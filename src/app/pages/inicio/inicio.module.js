/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('inicio', {
          url: '/inicio',
          templateUrl: 'app/pages/inicio/inicio.html',
          title: 'Inicio',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }
  angular.module('BlurAdmin.pages.inicio', [])
      .config(routeConfig);
})();
