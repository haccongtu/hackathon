(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$scope', '$state', '$ionicHistory'];
    function homeCtrl($scope, $state, $ionicHistory) {
        $scope.go = go;
        $scope.state = 'app.home.feeds';
        function go(des) {
            $scope.state = des; 
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go(des);
        }
    }
})();Ctrl', messageCtrl);
    messageCtrl.$inject = ['$scope', '$state', 'ProfileService', 'AuthService'];
    function messageCtrl($scope, $state, ProfileService, AuthService) {
        $scope.profiles = ProfileService.profiles;
    }
})();