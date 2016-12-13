(function() {
    angular.module('myProductModel')
        .component('productList', {
            templateUrl: '/models/product-list.htm',

            controller: function($http) {
                var ctrl = this;

                $http.get('/api/products').then(function(result) {
                    ctrl.productList = result.data;
                    console.log(ctrl.productList);
                })
                .catch(function(err) {
                    console.error('An error occurred', err);
                })
            }
        });
})();