var app=angular.module("app",[]);


app.controller("student",["$scope","$rootScope",function($scope,$rootscope){

    $scope.sub1=67;
    $scope.sub2=27;
    $scope.sub3=47;
    $scope.sub4=57;
    $scope.sub5=37;
    

    $scope.calaculate=function(){
            $scope.total=parseInt( $scope.sub1)+parseInt( $scope.sub2)+parseInt( $scope.sub3)+parseInt( $scope.sub4)+parseInt( $scope.sub5)
            $rootscope.per=($scope.total/500)*100;

    };

}]);