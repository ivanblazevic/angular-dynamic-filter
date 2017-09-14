## Installation

 bower install ng-dynamic-filter

 > Bower will automatically install dynamic-filter dependency, if you are not using dependency management include dynamic-filter library manually:

 https://github.com/ivanblazevic/dynamic-filter/blob/master/dest/dynamicFilter.js


 * add 'ngDynamicFilter' module
 * add directive:

```
<dynamic-filter
    template-url="app/directives/dynamicFilter/ngDynamicFilterMaterial.html"
    config="filterConfig"
    options="filterOptions"
    on-select="onFilter(result)">
</dynamic-filter>
```

* onFilter - is callback function from controller
* options - array of option objects, check API docs: https://github.com/ivanblazevic/dynamic-filter/#api
* config - config object, check API docs: https://github.com/ivanblazevic/dynamic-filter/#api
* template-url - manually copy directive's template from template folder to desired location and point out

For more details check out example directory
