"use strict";angular.module("angularJsApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngMaterial","ngDynamicFilter","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("angularJsApp").controller("MainCtrl",["$scope",function(a){function b(a){var b=angular.lowercase(a);return function(a){return 0===a.name.toLowerCase().indexOf(b)}}a.onFilter=function(b){a.result=b},a.dataSource=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}],a.querySearch=function(c){var d,e=c?a.dataSource.filter(b(c)):a.dataSource;return d=$q.defer(),$timeout(function(){d.resolve(e.map(function(a){return a.name}))},1e3*Math.random(),!1),d.promise},a.filterOptions=[{type:"OPTIONS",label:"Symbol",field:"symbol",options:a.dataSource.map(function(a){return a.symbol})},{type:"TEXT",label:"Weight",field:"weight"},{type:"AUTOCOMPLETE",label:"Material",field:"name",querySearch:a.querySearch}],a.filterConfig={saveState:!0}}]),angular.module("angularJsApp").filter("search",function(){return function(a,b){return b&&0!=b.length?a.filter(function(a){function c(b){var c=Object.keys(b)[0];return b[c][0]&&a[c]?b[c].some(function(b){return!(-1===a[c].toString().toLowerCase().indexOf(b.toLowerCase()||""))}):!1}return b.some(c)}):a}}),angular.module("angularJsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularJsApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<md-content class="md-padding"> <div class="links-section"> <a ng-click="showConfig =! showConfig">Show Config</a> <a target="_blank" href="https://github.com/ivanblazevic/dynamic-filter#api">API Docs</a> </div> <pre style="border: 1px solid #e4e4e4" class="prettyprint" ng-class="{ show: showConfig, hidden: !showConfig }">$scope.filterOptions = [\n{\n    type: "OPTIONS",\n    label: "Material",\n    field: "material",\n    options: $scope.dataSource.map(function(m) { return m.name }) // map object array to string\n},\n{\n    type: "TEXT",\n    label: "Symbol",\n    field: "symbol"\n},\n{\n    type: "AUTOCOMPLETE",\n    label: "Material Search",\n    field: "material",\n    params: {\n        querySearch: $scope.querySearch // if autocomplete, pass function which returns promise\n    }\n}\n]</pre> <dynamic-filter template-url="directives/dynamicFilter/ngDynamicFilterMaterial.html" config="filterConfig" options="filterOptions" on-select="onFilter(result)"> </dynamic-filter> <pre style="border: 1px solid #e4e4e4" class="prettyprint">JSON output: {{ result }}</pre> <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" style="width:100%"> <thead> <tr> <th width="20">Position</th> <th class="mdl-data-table__cell--non-numeric">Material</th> <th>Weight</th> <th>Symbol</th> </tr> </thead> <tbody> <tr ng-repeat="item in dataSource | search:result"> <td>{{ item.position }}</td> <td class="mdl-data-table__cell--non-numeric">{{ item.name }}</td> <td>{{ item.weight }}</td> <td>{{ item.symbol }}</td> </tr> </tbody> </table> </md-content>')}]);