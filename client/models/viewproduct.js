(function() {
    angular.module('myProductModel')
        .component('viewProduct', {
            templateUrl: '/models/view-product.htm',
            controller: function($http, $stateParams) {
                var ctrl = this;

                $http.get('/api/products/' + $stateParams.productId).then(function(result) {
                    ctrl.viewProduct = result.data;
                    console.log(ctrl.viewProduct);
                })
                .catch(function(err) {
                    console.error('An error occurred', err);
                });
            }
        });
})();