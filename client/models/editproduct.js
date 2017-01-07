(function() {
    angular.module('myProductModel')
        .component('editProduct', {
            templateUrl: '/models/edit-product.htm',
            controller: function($http, $stateParams, $state) {
                var ctrl = this;

                ctrl.options = [{
                    value: null
                }];
                
                ctrl.addOption = function() {
                    ctrl.options.push({value: null});
                }

                ctrl.removeOption = function(index) {
                    ctrl.options = ctrl.options.filter(function(obj, objIndex){
                        return objIndex != index;
                    });
                }

                ctrl.getProduct = function() {
                    $http.get('/api/products/' + $stateParams.productId).then(function(result) {
                        ctrl.getProduct = result.data;
                        console.log(ctrl.getProduct);
                    });
                }

                ctrl.editProduct = function() {
                    $http.put('/api/products/' + $stateParams.productId, {
                        name: ctrl.name,
                        description: ctrl.description,
                        specs: ctrl.options.map(function(item) {return item.value;}),
                        price: ctrl.price,
                        images: ctrl.images
                    }).then(function(status) {
                        console.log($stateParams.productId);
                        console.log('status');
                        $state.go('productList');
                    }).catch(function(err) {
                        console.error(err);
                    })
                }
            }
        });
})();