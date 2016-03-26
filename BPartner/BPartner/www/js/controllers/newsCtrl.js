(function () {
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
})();