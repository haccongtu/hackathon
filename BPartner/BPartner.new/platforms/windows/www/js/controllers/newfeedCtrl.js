(function () {
    'use strict';
    angular.module('controllers')
    .controller('newFeedCtrl', newFeedCtrl);

    newFeedCtrl.$inject = ['$scope', '$state', 'AuthService', '$ionicLoading', 'StatusService'];

    function newFeedCtrl($scope, $state, AuthService, $ionicLoading, StatusService) {

        var d = new Date();
        var model = {
            sender: {
                uid: AuthService.id,
                name: AuthService.user.name,
                avatar: AuthService.user.avatar,
            },
            content: '',
            time: d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2),
            start: {
                latLng: null,
                address: '',
                place_id: ''
            },
            end: {
                latLng: null,
                address: '',
                place_id: ''
            }
        };

        var mapOptions = {
            center: new google.maps.LatLng(37.3000, -120.4833),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var marker;
        var geocoder = new google.maps.Geocoder();
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        navigator.geolocation.getCurrentPosition(function (pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "Vị trí của bạn"
            });
        });
        map.addListener('click', function (e) {
            marker.setPosition(e.latLng);
            if ($scope.focus == 1) {
                model.start.latLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                codeLatLng(e.latLng, function (loc) {
                    if (loc !== null) {
                        model.start.address = loc.formatted_address;
                        model.start.place_id = loc.place_id;
                    } else {
                        model.start.address = '';
                        model.start.place_id = '';
                    }                   
                    $scope.$apply();
                });
            }
            else {
                model.end.latLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                codeLatLng(e.latLng, function (loc) {
                    if (loc !== null) {
                        model.end.address = loc.formatted_address;
                        model.end.place_id = loc.place_id;
                    }
                    else {
                        model.end.address = '';
                        model.end.place_id = '';
                    }
                    $scope.$apply();
                });
            }
        });

        $scope.focus = 1;
        $scope.map = map;
        $scope.vm = model;
        $scope.addStatus = function () {
            console.log(model);
            StatusService.addStatus(model);
            console.log(model);
            $state.go('app.home.feeds');
        };
        $scope.hfocus = function (f) {
            $scope.focus = f;
            if (f == 1) {
                if (model.start.latLng !== null) {
                    var p = new google.maps.LatLng(model.start.latLng.lat, model.start.latLng.lng);
                    map.setCenter(p);
                    marker.setPosition(p);
                }
            }
            else {
                if (model.end.latLng !== null) {
                    var p = new google.maps.LatLng(model.end.latLng.lat, model.end.latLng.lng);
                    map.setCenter(p);
                    marker.setPosition(p);
                }
            }
        };
        function codeLatLng(latlng, callback) {
            geocoder.geocode({
                'latLng': latlng
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK)
                    if (results[1]) {
                        callback(results[1])
                        return;
                    }
                callback(null);
            });

        }
    }
})();