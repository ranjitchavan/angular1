var app=angular.module("app",[]);

app.controller("emp",["$scope",function($scope){
$scope.salary=15282;

$scope.makeDouble=function(){

    $scope.salary*=2;
};
}]);