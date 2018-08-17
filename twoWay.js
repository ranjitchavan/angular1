var app=angular.module("app",[]);

app.controller("exam_result",["$scope","$rootScope",function($scope,$rootScope){


        $scope.sub1=10;
        $scope.sub2=20;
        $rootScope.a=20;

        $scope.result=function(){

                $scope.total=parseInt($scope.sub1)+parseInt($scope.sub2);

        };


}]);
