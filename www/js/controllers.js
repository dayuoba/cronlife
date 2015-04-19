angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Crons) {
	$scope.add = function(index) {
		console.log('hello');
		console.log(index);
	}
	$scope.name = 'hi';
	//add virtual datas here
	$scope.crons = Crons;
	console.log(Crons);
	//alert(Conrs);
})

.controller('ChatsCtrl', function($scope, $http, Chats) {
	$scope.chats = Chats.all();
	//console.log($http);
	$http.get('https://cnodejs.org/api/v1/topics').success(function(data) {
		console.log(data.data[0]);
	});
	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});