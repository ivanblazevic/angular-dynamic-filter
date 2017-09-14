'use strict';

/**
* @ngdoc function
* @name angularJsApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularJsApp
*/
angular.module('angularJsApp')
.controller('MainCtrl', function ($scope) {

    $scope.onFilter = function(result) {
        $scope.result = result;
    }

    $scope.dataSource = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
        {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
        {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
        {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
        {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
        {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
        {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
        {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
        {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
        {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
        {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ];

    // return array of strings
    $scope.querySearch = function(query) {
        var results = query ? $scope.dataSource.filter( createFilterFor(query) ) : $scope.dataSource, deferred;
        deferred = $q.defer();
        $timeout(function () {
            deferred.resolve( results.map(function(m) { return m.name }) );
        }, Math.random() * 1000, false);
        return deferred.promise;
    }

    /**
    * Create filter function for a query string
    */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(item) {
            return (item.name.toLowerCase().indexOf(lowercaseQuery) === 0);
        };
    }

    $scope.filterOptions = [
        {
            type: "OPTIONS",
            label: "Symbol",
            field: "symbol",
            options: $scope.dataSource.map(function(m) { return m.symbol })
        },
        {
            type: "TEXT",
            label: "Weight",
            field: "weight"
        },
        {
            type: "AUTOCOMPLETE",
            label: "Material",
            field: "name",
            querySearch: $scope.querySearch
        }
    ]

    $scope.filterConfig = {
        saveState: true
    }

});

/**
 * Filter array by multiple fields
 * @param list - array to filter
 * @param dynamicFilterResult - result object generated by dynamic filter
 * @return array - returns filtered list
 */
angular.module('angularJsApp').filter('search', function() {
    return function(list, dynamicFilterResult) {
        if (!dynamicFilterResult || dynamicFilterResult.length == 0) return list;

        return list.filter(function(item) {
            function hasMatch(o) {
                var field = Object.keys(o)[0];
                if (!o[field][0]) return false;
                if (!item[field]) return false;
                return o[field].some(function(s) {
                    return !!(item[field].toString().toLowerCase().indexOf(s.toLowerCase() || '') !== -1);
                })
            }
            return dynamicFilterResult.some(hasMatch);
        });
    }
});
