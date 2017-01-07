(function() {
    angular.module('myProductModel')
        .component('deleteProduct', { 
            controller: function($http, $stateParams, $state) {
                var ctrl = this;
                
                $http.delete('/api/products/'+ $stateParams.productId).then(function(status) {
                    console.log(status);
                    $state.go('productList');
                });
            }
        });
            
})();