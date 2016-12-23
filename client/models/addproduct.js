(function() {
    angular.module('myProductModel')
        .component('addProduct', {
            templateUrl: '/models/add-product.htm',
            controller: function($http, $state) {
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

                ctrl.choices = [
                    {
                        id: 'choice1'
                    }
                ];
                ctrl.addChoice = function() {
                    var newChoice = ctrl.choices.length + 1;
                    ctrl.choices.push({'id': 'choice' + newChoice});
                }
                ctrl.removeChoice = function() {
                    var newChoice = ctrl.choices.length - 1;
                    ctrl.choices.splice(newChoice);
                }

                ctrl.addProduct = function() {
                    $http.post('/api/products', {
                        name: ctrl.name,
                        description: ctrl.description,
                        specs: ctrl.options.map(function(item) {return item.value;}),
                        price: ctrl.price,
                        images: []
                    }).then(function(status) {
                        console.log(status);
                        $state.go('productList');
                    }).catch(function(err) {
                        console.error(err);
                    });
                }
            }
        });
})();