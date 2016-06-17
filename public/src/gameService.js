angular.module(`nodeThree`)
	.factory(`gameService`, function ($http, url) {
		return{
			getGames(){
				return $http.get(`/api/videoGames`);
			},
			favoriteGame(game){
				return $http.post(`api/videoGames/favorite`, game);
			},
			getFavorites(){
				return $http.get(`api/videoGames/favorite`);
			}
		}



// end of gameService
	})