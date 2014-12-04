(function(){
  var gems = [
    {
      name: 'Azurite', 
      price: 2.95,
      canPurchase: true,
      soldOut: false,
      image: 'img/azurite.jpg'
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      canPurchase: true,
      soldOut: false,
      image: 'img/pentagon.jpg'
    }
  ];

  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });
})();

