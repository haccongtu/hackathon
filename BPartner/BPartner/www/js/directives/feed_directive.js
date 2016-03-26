(function () {
    'use strict';
    angular
        .module('Directives')
        .directive('lazyLoad', function () {
            return {
                restrict: 'A',
                link: function (scope, elem) {
                    var scroller = $(document);
                    $(scroller).bind('scroll', function () {
                        console.log("122. " + scroller.scrollTop());
                        console.log("2. " + scroller.height());
                        if (scroller.scrollTop() + 700 >= scroller.height()) {
                            {
                                scope.$apply('loadMore()');
                            }
                        }
                    })
                }
            }
        })

})();