var url="data/beaches.json"

var find = function (array,id){
    for (var i = 0, m = null; i<array.length; i++) {
        if (array[i].id == id) {
            return array[i];
            break;
        }
    }
}

function indexController($scope, $route, $http, $location){
    $scope.dataBeaches=[];
    $http.get(url).then(function(response){
        $scope.beaches=response.data
    });
    $scope.go=function(path){
        $location.path(path);
    };
};

function showBeach($scope, $http, $routeParams) {
 $http.get(url).then(function(response){
     var Id = $routeParams.playaId;
   var cocos = response.data;  
   $scope.playa = find(cocos, Id);






   $scope.query = {};

   $scope.setQuery = function(parameter) {
       if ($scope.query[parameter]) {
           delete $scope.query[parameter]
       } else {
           $scope.query[parameter] = true;
       }
   }

 });

};





function MarkerAnimationCtrl() {
   var self = this;
   self.toggleBounce = function() {
     if (this.getAnimation() != null) {
       this.setAnimation(null);
     } else {
       this.setAnimation(google.maps.Animation.BOUNCE);
     }
   }

}

function cardController($scope, $http, $routeParams){
        var cardId = $routeParams.cardId;
    $http.get(url).then(function(response){
        var cards = response.data;  
       $scope.card = find(cards, cardId);
    });
}

function mainController($scope) {

       $scope.submitForm = function() {

           if ($scope.userForm.$valid) {
               alert('Gracias por contactar con nosotros!');
           }

       };

   };

function GetWeatherCtrl ($scope, weatherApi) {
   $scope.currentTime = moment().format('h:mm a');
   weatherApi.getLocation(url).then(function(res) {            
     weatherApi.getWeeklyWeather(res.data.city+","+res.data.country_code).then(function(response) {
       $scope.data = response.data;
       if ($scope.data.list.length) {
         $scope.data.list.forEach(function(i, v) {
           var date = moment(i.dt * 1000);
           i.dt = {
             day: date.format("dddd")
           };
           if (moment().format("d") == date.format("d")) {
             i.dt.today = true;
           }
         });
       };
     });
   });
 };

(function(){

    angular.module('myApp.controller',[])
    .controller('indexController', indexController)
    .controller('showBeach', showBeach)
    .controller('cardController', cardController)
    .controller('MarkerAnimationCtrl', MarkerAnimationCtrl)
    .controller('mainController', mainController)
    .controller('GetWeatherCtrl', GetWeatherCtrl)
    
})();