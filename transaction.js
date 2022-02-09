var app = angular.module('myApp',[]);
app.controller('transactionCtrl',function($scope, $http)
{
    $http.get("https://khakholia.github.io/angular/transaction.json")
    .then(function(response)
    {
        $scope.myData = response.data.data;
        $scope.rowlimit = response.data.length();
    });

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
    
});

app.filter("myfilter",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});


app.filter('myNameFilter',function()
{
    return function(input)
    {
        return ' ' + input;
    }
});

