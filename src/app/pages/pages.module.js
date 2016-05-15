/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig ($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/inicio');

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Consulta',
    //   icon: 'ion-card',
    //   subMenu: [{
    //     title: 'Saldo',
    //     blank: true
    //   }, {
    //     title: 'Estados de Cuenta',
    //     blank: true
    //   }, {
    //     title: 'Movimientos',
    //     blank: true
    //   }]
    // });

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Pagos',
    //   icon: 'ion-cash',
    //   subMenu: [{
    //     title: 'Consulta de Pagos',
    //     blank: true
    //   }, {
    //     title: 'Pagos Directos',
    //     blank: true
    //   }, {
    //     title: 'Cargo Automatico Cta',
    //     blank: true
    //   }]
    // });

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Rewards',
    //   icon: 'ion-ribbon-b',
    //   subMenu: [{
    //     title: 'Consulta de Puntos',
    //     blank: true
    //   }]
    // });

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Opciones',
    //   icon: 'ion-gear-a',
    //   subMenu: [{
    //     title: 'Cambio de Contraseña',
    //     blank: true
    //   }]
    // });

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Pages',
    //   icon: 'ion-document',
    //   subMenu: [{
    //     title: 'Sign In',
    //     fixedHref: 'auth.html',
    //     blank: true
    //   }, {
    //     title: 'Sign Up',
    //     fixedHref: 'reg.html',
    //     blank: true
    //   }, {
    //     title: 'User Profile',
    //     stateRef: 'profile'
    //   }, {
    //     title: '404 Page',
    //     fixedHref: '404.html',
    //     blank: true
    //   }]
    // });

  }

  angular.module('BlurAdmin.pages', [
                                      'ui.router',

                                      'BlurAdmin.pages.inicio',
                                      'BlurAdmin.pages.profile',
                                      'BlurAdmin.pages.consulta',
                                      'BlurAdmin.pages.pagos',
                                      'BlurAdmin.pages.rewards',
                                      'BlurAdmin.pages.opciones'
                                    ])
         .config(routeConfig);

})();
