const videoGameCtrl = require('./videoGameCtrl.js')

module.exports = (app) =>{
	app.get(`/api/videoGames`, videoGameCtrl.getGames);
	app.post(`/api/videoGames/favorite`, videoGameCtrl.favoriteGame)
	app.get(`/api/videoGames/favorite`, videoGameCtrl.getFavorites)

}