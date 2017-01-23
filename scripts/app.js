var url="data/beaches.json"


function setConfig($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    
    .when("/",{
        controller: 'indexController', 
        templateUrl:'/views/home.html'
        })
    .when("/showPlaya",{
        controller:'indexController',
        templateUrl:'/views/showBeach.html'
        })
    .when("/showPlaya/:playaId",{
        controller:'showBeach',
        templateUrl:'/views/showBeach.html'
        })
    .when("/form",{
        templateUrl:'/views/form.html'
        })
    .when("/showCard/:cardId",{
        controller:'cardController',
        templateUrl:'../components/card.html'
        })
    };
    
function weatherApi (myHttp) {
   return {
     getLocation: function() {
       return myHttp.jsonp("http://muslimsalat.com/daily.json?callback=JSON_CALLBACK");
     },
     getWeeklyWeather: function(city) {        
       return myHttp.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&mode=json&units=metric');
     }
   }
 };

function myHttp($http, myCache) {

   var headers = {
     'cache': myCache,
     'dataType': 'json'
   };
   var APPID = "bc1e24c531732375aece237bb2a5d49a";
   return {
     config: headers,
     get: function(url, success, fail) {
       return $http.get(url + "&APPID=" + APPID, this.config);
     },
     getLocal: function(url, success, fail) {
       return $http.get(url);
     },
     jsonp: function(url, success, fail) {
       return $http.jsonp(url, this.config);
     }
   };
 };  

function myCache ($cacheFactory) {
 return $cacheFactory('myCache', {
   capacity: 100
 });
};  

function JSON_CALLBACK(){

};

(function (){


    angular.module("myApp", ['ngRoute', 'ngMap', 'myApp.directive', 'myApp.controller'])
        .config(["$routeProvider","$locationProvider", setConfig])
        .factory('weatherApi', weatherApi)    
        .factory('myHttp', myHttp)
        .factory('myCache', myCache)
})();



/*var valueInput = $(".search").val();
var valueJson = $.getJSON('data/beaches.json')
$(".search").on("click", function open (){
    if (valueInput == valueJson) {
        console.log("BIEN!!!!!!")
    }
})*/