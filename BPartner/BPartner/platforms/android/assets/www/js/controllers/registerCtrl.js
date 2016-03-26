(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('registerCtrl', registerCtrl);
    registerCtrl.$inject = ['$scope', '$state', 'AuthService'];
    function registerCtrl($scope, $state, AuthService) {
        var user = {};


        $scope.register = register;
        $scope.user = user;

        function register() {             //đăng ký giả
            var firebaseObj = new Firebase(fire + 'profiles');
            var newProfile = firebaseObj.push();
            newProfile.set({
                'email': $scope.user.email,
                'name': $scope.user.name,
                'avatar': Math.floor(Math.random() *10)    //avatar ngẫu nhiên có sẵn để đơn giản
            }, function () {
                $state.go('app.login');
            });
        }
    }
})();