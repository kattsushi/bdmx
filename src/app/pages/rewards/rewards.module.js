/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('rewards', {
          url: '/rewards',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Rewards',
          sidebarMeta: {
            icon: 'ion-ribbon-b',
            order: 300,
          },
        });
  }
  angular.module('BlurAdmin.pages.rewards', [
                                        'BlurAdmin.pages.rewards.consultaPuntos'
                                       ])
         .config(routeConfig);

})();
