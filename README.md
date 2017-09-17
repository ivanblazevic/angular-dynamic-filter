[![Bower version](https://badge.fury.io/bo/ng-dynamic-filter.svg)](https://badge.fury.io/bo/ng-dynamic-filter)

### LIVE EXAMPLE: [Dynamic Filter with Angular Material](https://ivanblazevic.github.io/angular-dynamic-filter/)

## Installation

 bower install ng-dynamic-filter

 > Bower will automatically install dynamic-filter dependency, if you are not using dependency management include dynamic-filter library manually:

Filter homepage: https://github.com/ivanblazevic/dynamic-filter
Source: https://github.com/ivanblazevic/dynamic-filter/blob/master/dest/

 * add 'ngDynamicFilter' module
 * add directive templte:

```
<dynamic-filter
    template-url="app/directives/dynamicFilter/ngDynamicFilterMaterial.html"
    config="filterConfig"
    options="filterOptions">
</dynamic-filter>
```

> When using AUTOCOMPLETE, option object can be extended with additional properties and later can be used in directive's template. In example we passed querySearch callback function "querySearch: $scope.querySearch" and used in template like: md-items="item in filter.option.querySearch(searchText)"

* options - array of option objects, check API docs: https://github.com/ivanblazevic/dynamic-filter/#api
* config - config object, check API docs: https://github.com/ivanblazevic/dynamic-filter/#api
* template-url - manually copy directive's template from template folder to desired location and point to correct location in template-url attribute

For more details check out example directory source
