var app  = angular.module('myapp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'home.html'
    })
    .state('posts',{
        url:'/posts',
        template:'<posts-list></posts-list>'
    })
});
app.controller('mainCtrl',function(mainSvc){
    var vm = this;

    this.hello = "test";
    this.fruits = ['1','2','3'];
    this.alertme = function(){
        alert("test");
    }
});

app.service('mainSvc',function($http){
    this.getPosts = function(){
        return    $http.get('https://jsonplaceholder.typicode.com/posts');
    }
});