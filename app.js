//app.js
var ItemListController = function ($scope, $http) {
  // initialize a list of items on the scope
  $scope.items = [];
  var retrieveItems = function () {
  // get a list of items from the api located at '/api/items'
  $http.get('/api/items')
    .success(function (items) {
      $scope.items = items;
      console.log(items);
    });
  };
  $scope.updateItem = function (item) {
    $http.post('/api/items', item);
  };

  // load the items
  retrieveItems();
};