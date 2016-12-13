(function() {
    angular.module('myApp', ['ui.router', 'myProductModel'])
        .config(function($stateProvider) {
            $stateProvider
                .state('productList', {
                    url: '/',
                    template: '<product-list></product-list>'
                })
                .state('viewProduct', {
                    url: '/view-product/:id',
                    template: '<view-product></view-product>'
                })
        });
})();
