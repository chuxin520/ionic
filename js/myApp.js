/**
 * Created by hxsd on 2016/7/6.
 */
var myApp=angular.module("myApp",["ionic"]);
var scenicsDetail={};
var newsDetail={};
var userName="未注册";
var newsFlag=false;
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home",{
        url:"/home",
        templateUrl:"views/home/home.html",
        controller:"homeCtrl"
    }).state("scenics",{
        url:"/scenics",
        templateUrl:"views/scenics/scenics.html",
        controller:"scenicsCtrl"
    }).state("weather",{
        url:"/weather",
        templateUrl:"views/weather/weather.html",
        controller:"weatherCtrl"
    }).state("news",{
        url:"/news",
        templateUrl:"views/news/news.html",
        controller:"newsCtrl"
    }).state("guide",{
        url:"/guide",
        templateUrl:"views/guide/guide.html",
        controller:"guideCtrl"
    });
    $urlRouterProvider.otherwise("/guide");
});
myApp.controller("myCtrl", function ($scope) {
    $scope.fn1= function () {
        var totalObj=document.getElementsByTagName("body");
        totalObj[0].style.color="blue";
        totalObj[0].style.backgroundColor="green";
    }
});
/*
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home",{
        url:"/home",
        templateUrl:"views/home/home.html",
        controller:"homeCtrl"
    }).state("expressCheck",{
        url:"/expressCheck",
        templateUrl:"views/expressCheck/expressCheck.html",
        //controller:"reservationsCtrl"
    }).state("weather",{
        url:"/weather",
        templateUrl:"views/weather/weather.html",
       controller:"weatherCtrl"
    }).state("IPcheck",{
        url:"/IPcheck",
        templateUrl:"views/IPcheck/IPcheck.html",
        //controller:"IPcheckCtrl"
    }).state("scenics",{
        url:"/scenics",
        templateUrl:"views/scenics/scenics.html",
        controller:"scenicsCtrl"
    }).state("news",{
        url:"/news",
        templateUrl:"views/news/news.html",
        controller:"newsCtrl"
    }).state("guide",{
        url:"/guide",
        templateUrl:"views/guide/guide.html",
        controller:"guideCtrl"
    });
    $urlRouterProvider.otherwise("/guide");
});
*/
