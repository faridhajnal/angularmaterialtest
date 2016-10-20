angular.module('exampleApp', ['ngMaterial', 'ui.tree'])

.controller('TitleController', function($scope) {
  $scope.title = 'My App Title';
})
.controller('exampleCtrl', function($scope) {
  var imagePath = 'http://d3sdoylwcs36el.cloudfront.net/VEN-virtual-enterprise-network-business-opportunities-small-fish_id799929_size485.jpg';

  $scope.todos = [];
  for (var i = 0; i < 15; i++) {
    $scope.todos.push({
      number: i + 1,
      face: imagePath,
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      notes: "I'll be in your neighborhood doing errands."
    });
  }
})
.controller('treeController', function($scope){

      $scope.list = [{
        'id': 1,
        'caso': 'Caso 1',
        'nodes': [
          {
            'id': 11,
            'linea': 'TELCEL 1',
            'nodes': []
          },
          {
            'id': 12,
            'linea': 'TELCEL 2',
            'nodes': []
          }
        ]
      }, {
        'id': 2,
        'caso': 'Caso 2',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': [
          {
            'id': 21,
            'linea': 'IUSACELL 1',
            'nodes': []
          },
          {
            'id': 22,
            'linea': 'IUSACELL 2',
            'nodes': []
          }
        ]
      }, {
        'id': 3,
        'caso': 'Caso 3',
        'nodes': [
          {
            'id': 31,
            'linea': 'TELCEL 1',
            'nodes': []
          }
        ]
      }];

      $scope.$broadcast('angular-ui-tree:collapse-all');
      //$scope.$apply();

      $scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
      };

      $scope.expandAll = function () {
        console.log('expand all');
        $scope.$broadcast('angular-ui-tree:expand-all');
      };


      $scope.decideDestiny = function(node){
        if(node.nodes.length === 0){
          console.log('Abrir línea', node.linea, ';ID', node.id);
        }
        else{
           // $scope.toggle(node);
        }
      }

      $scope.getTitle = function(node){
        if(node.nodes.length === 0){
          return node.linea;
        }
        else{
          return node.caso;
        }
      }

      $scope.visible = function (item) {
        return !($scope.query && $scope.query.length > 0
        && item.caso.toUpperCase().indexOf($scope.query.toUpperCase()) == -1);

      };

      $scope.findNodes = function () {

        console.log($scope.query);

      };

      

      
});