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

        function register() {
            var firebaseObj = new Firebase(fire + 'profiles');
            var newProfile = firebaseObj.push();
            newProfile.set({
                'email': $scope.user.email,
                'name': $scope.user.name
            }, function () {
                $state.go('app.login');
            });
        }
    }
})();