var url="data/beaches.json"

function markerMap($rootScope, NgMap) {
	  	NgMap.getMap(url).then(function(map) {
	    $rootScope.map = map;
	  	});
	};

(function (){
	angular.module('ngMap', [])
		.run('markerMap',markerMap)
})();
