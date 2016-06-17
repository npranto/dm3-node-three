const videoGameRoutes = require('./videoGame/videoGameRoutes.js')

module.exports = (app) =>{
	videoGameRoutes(app);
}