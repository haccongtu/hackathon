var fire = 'https://dbsmartcity.firebaseio.com/';

angular.module('services', []);
angular.module('controllers', []);

var app = angular.module('bpartner', ['ionic', 'ionic-material', 'services', 'controllers', 'firebase']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

     .state('app', {
         url: '/app',
         abstract: true,
         templateUrl: 'templates/main.html',
         controller: 'appCtrl'
     })
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/startup/login.html',
                controller: 'loginCtrl'
            }
        }
    })
    .state('app.signup', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/startup/register.html',
                controller: 'registerCtrl'
            }
        }
    })
    .state('app.home', {
        url: '/home',
        abstract: true,
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            }
        },
        redirect: 'app.home.feeds'
    })
    .state('app.home.feeds', {
        url: '/feeds',
        views: {
            'homeContent': {
                templateUrl: 'templates/feeds.html'
            }
        }
    })
    .state('app.home.messages', {
        url: '/messages',
        views: {
            'homeContent': {
                templateUrl: 'templates/messages.html'
            }
        }
    })
     .state('app.home.friends', {
         url: '/friends',
         views: {
             'homeContent': {
                 templateUrl: 'templates/friends.html'
             }
         }
     })
    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html'
            }
        }
    })
    .state('app.news', {
        url: '/news',
        views: {
            'menuContent': {
                templateUrl: 'templates/news.html'
            }
        }
    })
    .state('app.settings', {
        url: '/settings',
        views: {
            'menuContent': {
                templateUrl: 'templates/settings.html'
            }
        }
    })

    $urlRouterProvider.otherwise('/app/login');


})
.run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
    $rootScope.$state = $state;
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        //if (toState.name !== 'app.login' && toState.name !== 'app.register' && AuthService.logined == false) {
        //    event.preventDefault();
        //    $state.go('app.login');
        //}
        //else
        if (toState.redirectTo) {
            event.preventDefault();
            $state.go(toState.redirect, toParams)
        }
    });
}]);
