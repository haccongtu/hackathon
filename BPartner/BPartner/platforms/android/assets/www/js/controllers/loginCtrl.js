(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('loginCtrl', loginCtrl);
    loginCtrl.$inject = ['$scope', 'AuthService'];
    function loginCtrl($scope, AuthService) {
        var user = { email: 'minhducle.1995@outlook.com', password: '' };

        $scope.login = login;
        $scope.user = user;

        function login() {
            if ($scope.user.email) {
                AuthService.login(user);   //đăng nhập giả
            }
        }
    }
})();