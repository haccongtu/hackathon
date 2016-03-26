var app = angular.module('bpartner', ['ionic', 'ionic-material']);

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
         templateUrl: 'templates/main.html'
     })
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/startup/login.html'
            }
        }
    })
    .state('app.signup', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/startup/register.html'
            }
        }
    })
    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            }
        }
    })
    .state('app.messages', {
        url: '/messages',
        views: {
            'menuContent': {
                templateUrl: 'templates/messages.html'
            }
        }
    })
    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
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
});
