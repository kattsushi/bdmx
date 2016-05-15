/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';
  /** @ngInject */
  function profilePicture(layoutPaths) {
    return function(input, ext) {
      ext = ext || 'png';
      return layoutPaths.images.profile + input + '.' + ext;
    };
  }
  angular.module('BlurAdmin.theme')
      .filter('profilePicture', profilePicture);
})();
