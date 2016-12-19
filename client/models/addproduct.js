(function() {
    angular.module('myProductModel')
        .component('addProduct', {
            templateUrl: '/models/add-product.htm',
            controller: function($http, $state) {
                var ctrl = this;

                ctrl.options = [
                    {
                        id: 'option1'
                    }
                ];
                ctrl.addOption = function() {
                    var newOption = ctrl.options.length + 1;
                    ctrl.options.push({'id': 'option' + newOption});
                }
                ctrl.removeOption = function() {
                    var newOption = ctrl.options.length - 1;
                    ctrl.options.splice(newOption);
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
                        specs: [],
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