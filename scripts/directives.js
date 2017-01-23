	function headerDirective(){
		return{
			restrict: "A",
			scope:{},
			templateUrl:"views/header.html"
		};
	};
	function footerDirective(){
		return{
			restrict:'A',
			scope:{},
			templateUrl:"views/footer.html"
		};
	};
	function beachDirective(){
		return{
			restrict:'AE',
			scope:{},
			templateUrl:"views/showBeach.html"
		};
	};
	/*function cardDirective(){
		return{
			restrict:'AE',
			templateUrl:"components/card.html"
		};
	};*/


(function(){
	var app = angular.module('myApp.directive', []);
		app.directive('headerDirective', headerDirective);
		app.directive('footerDirective', footerDirective);
		app.directive('beachDirective', beachDirective);
		//app.directive('cardDirective', cardDirective);
			
})();