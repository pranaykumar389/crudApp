(function() {
    angular.module('myApp', ['ui.router', 'myProductModel'])
        .config(function($stateProvider) {
            $stateProvider
                .state('productList', {
                    url: '/',
                    template: '<product-list></product-list>'
                })
                .state('viewProduct', {
                    url: 'productList./view-product/:productId',
                    template: '<view-product></view-product>'
                })
        });
})();
