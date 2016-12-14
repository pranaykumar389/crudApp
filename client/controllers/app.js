(function() {
    angular.module('myApp', ['ui.router', 'myProductModel'])
        .config(function($stateProvider) {
            $stateProvider
                .state('productList', {
                    url: '/',
                    template: '<product-list></product-list>'
                })
                .state('productList.viewProduct', {
                    parent : 'productList',
                    url: 'view-product/:productId',
                    template: '<view-product></view-product>'
                });
        });
})();