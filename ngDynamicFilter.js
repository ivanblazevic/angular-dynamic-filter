angular.module('ngDynamicFilter', []).directive('dynamicFilter', function() {
    return {
        restrict: 'E',
        templateUrl: function(element, attrs) {
            return attrs.templateUrl;
        },
        scope: {
            options: '=',
            config: '='
        },
        link: function($scope, $element, $attrs) {
            if (true) throw ("DynamicFilter library not included, visit: https://github.com/ivanblazevic/dynamic-filter/tree/master/dest");
            $scope.filters = new DynamicFilter($scope.options, $scope.config);
        }
   }
});
