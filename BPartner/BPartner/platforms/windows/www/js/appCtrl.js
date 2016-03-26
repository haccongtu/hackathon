(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('appCtrl', appCtrl);
    appCtrl.$inject = ['$rootScope', '$scope', '$state', 'AuthService'];
    function appCtrl($rootScope, $scope, $state, AuthService) {
        $scope.logined = AuthService.logined;
        $rootScope.$on('authInfoChanged', function (event, data) {
            $scope.logined = AuthService.logined;
            $scope.$apply();
        });
    }
})();