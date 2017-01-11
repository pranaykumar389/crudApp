(function() {
    angular.module('myProductModel')
        .component('editProduct', {
            templateUrl: '/models/edit-product.htm',
            controller: function($http, $stateParams, $state) {
                var ctrl = this;

                ctrl.options = [];
                
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
                        var specs = ctrl.getProduct.specs;
                        for(var i = 0; i < specs.length; i++) {
                            ctrl.options.push({value: specs[i]});
                        }
                    });
                }

                ctrl.editProduct = function() {
                    $http.put('/api/products/' + $stateParams.productId, {
                        name: ctrl.getProduct.name,
                        description: ctrl.getProduct.description,
                        specs: ctrl.options.map(function(item) {return item.value;}),
                        price: ctrl.getProduct.price,
                        images: ctrl.getProduct.images
                    }).then(function(status) {
                        $state.go('productList');
                    }).catch(function(err) {
                        console.error(err);
                    });
                }

                ctrl.deleteProduct = function() {
                    var confirmMsg = confirm('Are you want to delete the product?');
                    if(confirmMsg) {
                        $http.delete('/api/products/' + $stateParams.productId).then(function(result) {
                            ctrl.deleteProduct = result.data;
                            console.log(ctrl.deleteProduct);
                            $state.go('productList');
                        }).catch(function(err) {
                            console.error(err);
                        });
                    }
                }
            }
        });
})();