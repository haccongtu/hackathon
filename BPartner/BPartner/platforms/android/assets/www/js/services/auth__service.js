(function () {
    'use strict';

    angular
        .module('services')
        .service('AuthService', AuthService);

    AuthService.$inject = ['$rootScope', '$q', '$state', '$timeout', '$ionicHistory'];

    function AuthService($rootScope,$q, $state, $timeout, $ionicHistory) {
        var service = {
            user: {},
            logined: false,
            login: login,
            register: register
        };

        function login(user) {
            var ref = new Firebase(fire + "profiles");
            ref.orderByChild("email").equalTo(user.email).on("child_added", function (snapshot) {
                service.user = snapshot.val();
                service.logined = true;
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $rootScope.$broadcast('authInfoChanged', {});
                $state.go('app.home.feeds', {}, { location: "replace", reload: true });
            });
        };

        function register(user) {
            return $q(function (resolve, reject) {

            });
        };
        return service;
    }
})();